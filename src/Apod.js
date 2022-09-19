const apiKey = '2LZ635wVeZiHavjbczdtcuwlj0lmqJWOWQZAOG15';



//$"https://api.nasa.gov/planetary/apod?api_key={_apiKey}&date={date}" : $"https://api.nasa.gov/planetary/apod?api_key={_apiKey}";
export async function GetLatestApod() {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    const json = await res.json();
    console.log(json)
    return json;
} 

