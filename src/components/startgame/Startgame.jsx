import React from 'react'
import styled from 'styled-components'
import styles from './Startgame.module.css'

export default function Startgame({toggle}) {
  return (
  < Container>
  <div><img src="/images/dices 1.png" alt="" srcset="" /></div>
  
  <div className='contents'>
    <h1>DICE GAME</h1>
   <Button  onClick={toggle} className={styles.play_btn}>Play Now</Button>
  </div>
  
  </Container>
  )
}








const Container = styled.div`
max-width:1080px;
display:flex;
margin:0 auto;
height:100vh;
align-items:center;

.contents h1{
    font-size:96px;
    white-space:nowrap;

}

`;
const Button = styled.button`
/* BUTTON/Default */

/* Auto layout */

padding: 10px 18px;
gap: 10px;
color:white;
width: 220px;
height: 44px;

background: #000000;
border-radius: 5px;
font-size:16px;
`
