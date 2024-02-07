
import React, { useState } from 'react';
import axios from 'axios';

const ChatComponent = () => {

  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = async () => {
    const response = await axios.post(
        'https://api.openai.com/v1/completions', {
        model: 'text-davinci-003',
        prompt: userInput,
        max_tokens: 50
     }, {
        headers: {
          'Authorization': 'Bearer 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',
        },
      }
    );

    const message = response.data.choices[0].text;
    setChatHistory([...chatHistory, { user: userInput, bot: message }]);
    setUserInput('');
  };

  return (
    <div>
      <div>
        {chatHistory.map((message, index) => (
          <div key={index}>
            <strong>User:</strong> {message.user}
            <br />
            <strong>Bot:</strong> {message.bot}
          </div>
        ))}
      </div>
      <input type="text" value={userInput} onChange={handleInputChange} />
      <button onClick={handleSendMessage}>Lähetä</button>
    </div>
  );
};

export default ChatComponent;
