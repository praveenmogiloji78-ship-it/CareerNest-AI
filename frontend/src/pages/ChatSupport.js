import { useState } from "react";

function ChatSupport() {

    const [message, setMessage] = useState("");

    const [chat, setChat] = useState([
        {
            sender: "Support",
            text: "Hello 👋 How can we help you?",
        },
    ]);

    const sendMessage = () => {

        if (message.trim() === "") {
            return;
        }

        setChat([
            ...chat,
            {
                sender: "You",
                text: message,
            },
        ]);

        setMessage("");

    };

    return (

        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">

            <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg overflow-hidden">

                {/* Header */}
                <div className="bg-blue-600 text-white p-5">

                    <h1 className="text-3xl font-bold">
                        SmartHire Chat Support 
                    </h1>

                </div>

                {/* Chat Messages */}
                <div className="h-[500px] overflow-y-auto p-5 space-y-4 bg-gray-50">

                    {chat.map((msg, index) => (

                        <div
                            key={index}
                            className={
                                msg.sender === "You"
                                    ? "text-right"
                                    : "text-left"
                            }
                        >

                            <div
                                className={
                                    msg.sender === "You"
                                        ? "inline-block bg-blue-500 text-white px-4 py-3 rounded-2xl"
                                        : "inline-block bg-gray-300 text-black px-4 py-3 rounded-2xl"
                                }
                            >

                                <p className="font-bold">
                                    {msg.sender}
                                </p>

                                <p>
                                    {msg.text}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

                {/* Input */}
                <div className="p-5 flex gap-3 border-t">

                    <input
                        type="text"
                        placeholder="Type message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex-1 border p-3 rounded-lg"
                    />

                    <button
                        onClick={sendMessage}
                        className="bg-blue-500 text-white px-6 rounded-lg hover:bg-blue-600"
                    >
                        Send
                    </button>

                </div>

            </div>

        </div>

    );
}

export default ChatSupport;