
import React, { useState, useEffect } from 'react';

import Title from './components/Title';
import Banner from './components/Banner';

const App = () => {

  const [balance, setBalance] = useState(0);
  
  useEffect(() => {
    console.log('Fetching..');
  });

  return (

    <div className="mainapp">
      <Title />
      <Banner />
      <div className="main">
        <p>Hello, your balance is {balance}.</p>
      </div>
    </div>

)};

export default App;
