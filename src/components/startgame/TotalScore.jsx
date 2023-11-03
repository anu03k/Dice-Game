import React from 'react'
import styles from './total.module.css'

function TotalScore({score}) {
  return (
    <div className={styles.score_container}>
        <h1>{score}</h1>
        <p>TotalScore </p>
        
        
        </div>
  )
}

export default TotalScore;
