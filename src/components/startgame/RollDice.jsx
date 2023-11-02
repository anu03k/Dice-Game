import React, { useState } from 'react'
import styled from 'styled-components';

const RollDice = () => {


    const [currentDice , setCurrentDice]=useState();
    const generateRandom= (min, max)=>{
        console.log( Math.floor(Math.random()*(max-min)+min))
        return Math.floor(Math.random()*(max-min)+min);
    }
      const Rolldice =()=>{
       const RandomNum= generateRandom(1,7);
       setCurrentDice((prev)=>RandomNum);
      }

       


  return (
    <DiceContainer>
<div className='dice'
onClick={Rolldice}

>
    <img src="/images/dice_1.jpg" alt="" />
</div>
<p>Click on dice to roll</p>
    </DiceContainer>
    
  )
}

export default RollDice;
const DiceContainer= styled.div`
margin-top:48px;
display:flex;
flex-direction:column;

align-items:center;
justify-content:center;

.dice{
    cursor:pointer;

}
`
