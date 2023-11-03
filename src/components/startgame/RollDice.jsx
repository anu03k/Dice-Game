import React, { useState } from 'react'
import styled from 'styled-components';

const RollDice = ({Rolldice,currentDice}) => {


       


  return (
    <DiceContainer>
<div className='dice'
onClick={Rolldice}

>
    <img src={`/images/dice_${currentDice}.jpg`} alt="dice" />
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
