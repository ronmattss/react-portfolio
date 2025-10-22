import React, { useEffect, useRef } from 'react';
import './TriangleBackground.css';

const TriangleBackground = ({
  nodeCount = 64,
  speed = 0.22,
  neighborCount = 4,
  pointerSize = 4,
  glowBlur = 8,
  maxDistRatio = 0.42,
  colorFill = 'rgba(255,139,0,0.06)',
  colorStroke = 'rgba(255,139,0,0.16)'
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const count = isMobile ? Math.max(10, Math.floor(nodeCount / 3)) : nodeCount;

    const nodes = [];
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        // movement based on configurable speed
        vx: (Math.random() - 0.5) * speed * 2,
        vy: (Math.random() - 0.5) * speed * 2,
        r: 1.6 + Math.random() * 2.2
      });
    }

    const pointer = { x: width / 2, y: height / 2, active: false };

    function resize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }

    window.addEventListener('resize', resize);

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      let clientX, clientY;
      if (e.touches && e.touches[0]) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      pointer.x = clientX - rect.left;
      pointer.y = clientY - rect.top;
      pointer.active = true;
    }
    function onLeave() { pointer.active = false; }

    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('touchmove', onMove, { passive: true });
    canvas.addEventListener('mouseleave', onLeave);
    canvas.addEventListener('touchend', onLeave);

    let rafId;

    function step() {
      ctx.clearRect(0, 0, width, height);

      // update nodes
      for (let n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -30) n.x = width + 30;
        if (n.x > width + 30) n.x = -30;
        if (n.y < -30) n.y = height + 30;
        if (n.y > height + 30) n.y = -30;
      }

      // combined list includes pointer if active
      const combined = pointer.active ? nodes.concat(pointer) : nodes;

      // for each node, find k nearest neighbors and draw triangles
      const k = neighborCount; // configurable neighbor count
      const maxDist = Math.min(width, height) * maxDistRatio;
      const maxDistSq = maxDist * maxDist;

      for (let i = 0; i < combined.length; i++) {
        const a = combined[i];
        // compute distances
        const nearest = [];
        for (let j = 0; j < combined.length; j++) {
          if (i === j) continue;
          const b = combined[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx*dx + dy*dy;
          nearest.push({ node: b, d2 });
        }
        nearest.sort((p,q) => p.d2 - q.d2);

        // create triangles between a and pairs of nearest neighbors
        for (let m=0; m<Math.min(k, nearest.length); m++){
          for (let nIdx = m+1; nIdx<Math.min(k, nearest.length); nIdx++){
            const n1 = nearest[m];
            const n2 = nearest[nIdx];
            if (!n1 || !n2) continue;

            if (n1.d2 < maxDistSq && n2.d2 < maxDistSq) {
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(n1.node.x, n1.node.y);
              ctx.lineTo(n2.node.x, n2.node.y);
              ctx.closePath();

              // subtle fill depending on centroid location for variety
              const cx = (a.x + n1.node.x + n2.node.x) / 3;
              const cy = (a.y + n1.node.y + n2.node.y) / 3;
              const v = (Math.sin((cx/width)*Math.PI*2) + Math.cos((cy/height)*Math.PI*2))*0.5 + 0.5;
              const alpha = 0.03 + v * 0.09; // between 0.03 and 0.12
              ctx.fillStyle = `rgba(226,138,0,${Math.max(0.02, alpha * 0.7)})`;
              ctx.fill();

              ctx.strokeStyle = 'rgba(2,6,23,0.14)';
              ctx.lineWidth = 0.45;
              ctx.stroke();
            }
          }
        }
      }

      // draw nodes with glow
      for (let n of nodes) {
        ctx.beginPath();
        // outer glow
        ctx.fillStyle = 'rgba(255,139,0,0.06)';
        ctx.shadowColor = 'rgba(255,139,0,0.12)';
        ctx.shadowBlur = glowBlur;
        ctx.arc(n.x, n.y, n.r + 2, 0, Math.PI*2);
        ctx.fill();
        // inner core
        ctx.beginPath();
        ctx.shadowBlur = 0;
        ctx.fillStyle = 'rgba(255,255,255,0.95)';
        ctx.arc(n.x, n.y, Math.max(0.9, n.r/2), 0, Math.PI*2);
        ctx.fill();
      }

      // pointer dot
      if (pointer.active) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,255,255,0.92)';
        ctx.shadowColor = 'rgba(255,139,0,0.25)';
        ctx.shadowBlur = Math.max(4, glowBlur);
        ctx.arc(pointer.x, pointer.y, pointerSize, 0, Math.PI*2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      rafId = requestAnimationFrame(step);
    }

    step();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('touchmove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
      canvas.removeEventListener('touchend', onLeave);
    };
  }, [nodeCount, speed, neighborCount, pointerSize, glowBlur, maxDistRatio, colorFill, colorStroke]);

  return <canvas ref={canvasRef} className="triangle-bg-canvas" aria-hidden />;
};

export default TriangleBackground;