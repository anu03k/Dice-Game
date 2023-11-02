// App.jsx

import React, { useState } from 'react';
import Startgame from './components/Startgame/Startgame';
import Gameplay from './components/startgame/Gameplay';
const App = () => {
    const[isGameStarted,setIsGameStarted]=useState(true);
    // initial state, setter function setIsGameStarted function is used to update or modify the state of isGameStarted.
    const toggleGamePlay =()=>{
        setIsGameStarted((prev)=> !prev)
    };


  return (
    <>
        {
            isGameStarted? <Gameplay/> : <Startgame 
            toggle={toggleGamePlay}
            
            />
        }
     
     
    </>
  );
};

export default App;
