
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

    const subject = 'banking';

    const response = await axios.post(
        'https://api.openai.com/v1/completions', {
        model: 'gpt-3.5-turbo-instruct',
        prompt: `Please provide information about ${subject}: ${userInput}`,
        max_tokens: 50
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
        <p>Hello, I am <strong>Kalevi</strong>, your bankbot. How may I help you?</p>
        {chatHistory.map((message, index) => (
          <div className="chat" key={index}>
            <strong>You:</strong> {message.user}
            <br />
            <strong>Kalevi:</strong> {message.bot}
          </div>
        ))}
      </div>
      <textarea type="text" value={userInput} onChange={handleInputChange} />
      <button onClick={handleSendMessage}>Send a question</button>
    </div>
  );
};

export default ChatComponent;
