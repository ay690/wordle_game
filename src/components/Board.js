import React, { useEffect, useState } from 'react'
import Line from './Lines';

import styles from "./index.module.css"

const Board = ({ solution }) => {
//console.log(solution)

const[currentGuess, setCurrentGuess] = useState("");
const[guesses, setGuesses] = useState(new Array(6).fill(null));

 useEffect(() => {
   const typeHandler = (event) => {
     //console.log(e.key);
    setCurrentGuess((oldGuess) => oldGuess + event.key);
  }

  window.addEventListener('keypress', typeHandler);

  return () => window.removeEventListener('keypress', typeHandler);

 },[currentGuess]);


 const lines = guesses.map((guess, i) => {
  
  let isCurrentGuess = guesses.findIndex((val) => val !== null); 
  //console.log(isCurrentGuess)

    return(
      <div key={i} className={styles.line}>
      <Line guess = { isCurrentGuess ? currentGuess : guess || ""}/>
      </div>
    )
 });

  return (
    <div className={styles.board}>{lines}</div>
  )
}

export default Board;