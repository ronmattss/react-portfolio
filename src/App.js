import Home from './Pages/Home';
import MessagePage from './Pages/MessagePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// test

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/GradMessage" element={<MessagePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
