import React, { useState } from 'react'
import styled from 'styled-components'

function NumberSelect(  {error,selectedNum , setSelectNUm}) {

    const arrayNum=[1,2,3,4,5,6]
  
  return (
    <NumberSelectContainer>
      <p className='error'>{error}</p>

    <div className='flex'>
{
    arrayNum.map((value,i) =>( <Box  isSelected={value=== selectedNum} 
      
      key={i}  onClick={()=>setSelectNUm(value)}
    // here we are passing values in function hence we required annonomous fxn to pass value 
    
    >{value}</Box>))

}
        
    </div>
    <p>Select Number</p>
</NumberSelectContainer>





  )
}

export default NumberSelect;
const NumberSelectContainer=styled.div`
display:flex;
flex-direction:column;
align-items:end;
.flex{
  display:flex;
  gap:24px;
}
p{
  font-size:24px;
  font-weight:700;
}
.error{
  color:red;
  font-size:19px;
}

`




const Box=styled.div`
  height:72px;
  width:72px;
  border:1px solid black;
  display:grid;
  place-items:center;
  font-size:24px;
  font-weight:700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
color: ${(props) => (props.isSelected ? "white" : "black")};

`