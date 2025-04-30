import { useState } from 'react';

function JsonTest() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const sendMessage = async () => {
        const res = await fetch('/api/echo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: input })
        });

        const data = await res.json();
        setResponse(data.response);
    };

    return (
        <div className="p-4">
            <input
                type="text"
                className="border p-2 mr-2"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Say something..."
            />
            <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded">
                Send
            </button>
            <p className="mt-4">Flask says: {response}</p>
        </div>
    );
}

export default JsonTest;
