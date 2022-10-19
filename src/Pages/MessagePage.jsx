import { useEffect, useState } from "react";
import Card from "../components/Card";
import NavBar from "../components/Navbar";
import messages from "../data/messages.json"

const MessagePage = () => {

    const [message, setMessage] = useState('');
    const [messageTest, setMessageTest] = useState('For mobile devices, the message might appear here as my backend code is not working on mobile');
    const [sender, setSender] = useState('');
    const [code, setCode] = useState('');
    const [show, setVisibility] = useState(false);
    const [state, setState] = useState("Find Message");


    useEffect(() => {
        if (message === null) return;
        console.log(message);

        // 
    }, [message])

    async function requestMessage() {
        setState("Finding Message")
        checkMessage();
        console.log("Finding Message")
        const userRequest = await fetch(`https://basicmessageapi.azurewebsites.net/api/Message/byCode?code=${code}&sender=${sender}`)
        const json = await userRequest.json();
        console.log(json.status)
        setState(json)
        if (json.status === 400) {
            setVisibility(false)
            setState("Find another Message");

        }
        else {
            setState("Found Message")
            setVisibility(true)
            setMessage(json.message)
        }
    }


    function checkMessage() {


        for (var i = 0; i < messages.length; i++) {
            if (messages[i].sender === sender && messages[i].code === code) {
                console.log(messages[i])
                setMessageTest(messages[i].message);
                setState("Found Message")
                setVisibility(true)
                setMessage(messages[i].message)
                return
            }
            setVisibility(false)
            setState("Find another Message");
            console.log("No test message found")
        }

    }


    return (
        <div>
            <NavBar />
            <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div class="px-4 mx-auto my-20 max-w-7xl sm:px-6 lg:px-8">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Grad Message Portal</h2>
                        {show ? (<div></div>) : (<p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">{messageTest}</p>)}
                    </div>

                    <div class="relative max-w-md mx-auto mt-8 md:mt-16">
                        <div class="overflow-hidden bg-white rounded-md shadow-md">
                            <div class="px-4 py-6 sm:px-8 sm:py-7">
                                {
                                    show ? (

                                        <div class="overflow-hidden bg-white rounded-md shadow-md">
                                            <div class="px-4 py-6 sm:px-8 sm:py-7">
                                                <div>
                                                    <p className="max-w-fit my-auto text-left text-clip  flex justify-left">{message}</p>

                                                </div>
                                            </div>
                                        </div>
                                    )
                                        :
                                        (
                                            <form >
                                                <div class="space-y-5">
                                                    <div>
                                                        <label for="" class="text-base font-medium text-gray-900"> From </label>
                                                        <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                            </div>
                                                            <input
                                                                type=""
                                                                name=""
                                                                id=""
                                                                placeholder="Enter Sender's name"
                                                                onChange={e => setSender(e.target.value)}
                                                                class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div class="flex items-center justify-between">
                                                            <label for="" class="text-base font-medium text-gray-900"> Code </label>
                                                        </div>
                                                        <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

                                                            </div>

                                                            <input
                                                                type=""
                                                                name=""
                                                                id=""
                                                                placeholder="Enter the code sent to you"
                                                                onChange={e => setCode(e.target.value)}
                                                                class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <button type="button" onClick={() => requestMessage()} class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                                            {state}
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>)
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 justify-items-center xl:grid-cols-1 2xl:grid-cols-1"></div>
            </section>
        </div>)
}

export default MessagePage;