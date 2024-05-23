
import React, { useState } from 'react';
import axios from 'axios';

const ChatComponent = () => {

  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = async () => {

    const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

    const subject = 'pankki';

    const response = await axios.post(
        'https://api.openai.com/v1/completions', {
        model: 'gpt-3.5-turbo-instruct',
        prompt: `Kerro tietoja aiheesta ${subject}: ${userInput}`,
        max_tokens: 150,
        stop: ".\n"
     }, {
        headers: {
          'Authorization': API_KEY,
        },
      }
    );

    console.log(response.data['usage']);
    const message = response.data.choices[0].text;
    setChatHistory([...chatHistory, { user: userInput, bot: message }]);
    setUserInput('');

  };

  return (
    <div className="chatcomponent">
      <div className="chatbox">
        <p>Hei, olen <strong>Kalevi</strong>, pankkibottisi. Kuinka voin auttaa?</p>
        {chatHistory.map((message, index) => (
          <div className="chat" key={index}>
            <strong>Sinä:</strong> {message.user}
            <br />
            <strong>Kalevi:</strong> {message.bot}
          </div>
        ))}
      </div>
      <textarea type="text" value={userInput} onChange={handleInputChange} />
      <button onClick={handleSendMessage}>Lähetä kysymys</button>
    </div>
  );
};

export default ChatComponent;
