import styled from 'styled-components';
import TotalScore from './TotalScore';
import NumberSelect from './NumberSelect';
import RollDice from './RollDice';
import { useState } from 'react';
import styles from './Startgame.module.css'
import Rules from './Rules';



const Gameplay = () => {
    // states
    const [selectedNum , setSelectNUm]=useState();
    const [currentDice , setCurrentDice]=useState(1);
    const [score,setScore]=useState(0);
    const[error,setError]=useState();
    const [showRule,setShowRules]=useState(false);
    const resetScore=()=>{
        setScore(0);
    }
  

  



  const generateRandom= (min, max)=>{
      console.log( Math.floor(Math.random()*(max-min)+min))
      return Math.floor(Math.random()*(max-min)+min);
  }
    


    const Rolldice =()=>{
        if(!selectedNum){
            setError("You have not selected any number! ");
            
            return;}
            setError("") ;
            // empty string 
            //here at top to not let random number generate
            const RandomNum= generateRandom(1,7);
  //             setCurrentDice((prev)=>RandomNum);
            setCurrentDice(RandomNum);

                    if(selectedNum===RandomNum){
            setScore((prev)=>prev+RandomNum);        
            

                  }else{
              setScore((prev)=>prev-2);
                }
                setSelectNUm(undefined);
                if(score=== 30){
                    resetScore();
                    alert('YOU WON!!');
                }

    }
    const handleButtonClick = () => {
        window.location.href = 'http://localhost:5173/'; // Replace '/initialPage' with the actual URL of your initial page
      };
      

  return (
    <>
      <MainContainer>
        <div className="topSection">
            {/* score passed as props */}
          <TotalScore  score={score}/>
          <NumberSelect
          error={error}
          selectedNum={selectedNum}
          setSelectNUm={setSelectNUm}
          
          
          />
        </div>
        <RollDice
        currentDice={currentDice} Rolldice={Rolldice} />
        <div className="btns">
            <OutButton  onClick={resetScore}  >RESET</OutButton>
            <Button
        onClick={() => setShowRules((prev) => !prev)}
        className={`${styles.play_btn}`}
    >
        SHOW RULES
    </Button>
    <Button onClick={handleButtonClick}>HOME</Button>
            
        </div>
        {showRule &&< Rules />}


      </MainContainer>
    </>
  );
};




export default Gameplay;

const MainContainer = styled.main`
padding-top:70px;
  .topSection {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .btns{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:10px;
    margin-top:40px;
   

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

// button passed 
const OutButton = styled(Button)`
/* BUTTON/Default */
color: rgb(0, 0, 0);
    background-color: rgb(255, 255, 255);
    transform: scale(1.03);
    transition: 0.3s background ease-in;

/* Auto layout */
&:hover{
padding: 10px 18px;
gap: 10px;
color:white;
width: 220px;
height: 44px;

background: #000000;
border-radius: 5px;
font-size:16px;
}
`

