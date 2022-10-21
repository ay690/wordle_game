import React, { useEffect, useState } from 'react'
import Line from './Lines';

import "./style.css"

const Board = ({ solution }) => {
//console.log(solution)

const[currentGuess, setCurrentGuess] = useState("");
const[guesses, setGuesses] = useState(new Array(6).fill(null));
const[isGameOver, setIsGameOver] = useState(false);

 useEffect(() => {
   const typeHandler = (e) => {
     //console.log(e.key);

     if(isGameOver){
      return;
     }

     
     
    if(e.key === "Backspace"){
      setCurrentGuess(currentGuess.slice(0, -1)); //this will help you to delete or earse your previous character
      return;
    }
    
     if(e.key === "Enter"){
      if(currentGuess.length !== 5){
        return;
      }

      const newGuesses = [...guesses];
      newGuesses[guesses.findIndex((val) => val === null)] = currentGuess;
      setGuesses(newGuesses);
      setCurrentGuess("");


      const isCorrect = solution === currentGuess;
      if(isCorrect){
        setIsGameOver(true);
      }
      
     }


     if(currentGuess.length >= 5){
      return;
     }


    const isLetter = e.key.match(/^[a-z]{1}$/) != null; //this regex is to check if we have written letter

    if(isLetter){
      setCurrentGuess((oldGuess) => oldGuess + e.key);
    }
    
  }

  window.addEventListener('keypress', typeHandler);

  return () => window.removeEventListener('keypress', typeHandler);

 },[currentGuess, isGameOver, solution]);


//  const lines = guesses.map((guess, i) => {
  
//   let isCurrentGuess = guesses.findIndex((val) => val === null) === i; 
//   //console.log(isCurrentGuess)

//     return(
//       <div key={i} className={styles.line}>
//       <Line guess = { isCurrentGuess ? currentGuess : guess || ""}/>
//       </div>
//     )
//  });

  return (
    <div className="board">
      { guesses.map((guess, i) => {
  
  let isCurrentGuess = guesses.findIndex((val) => val === null) === i; 
  //console.log(isCurrentGuess)

    return(
      <div key={i} className="line">
      <Line guess = { isCurrentGuess ? currentGuess : guess || ""}
      isFinal = {!isCurrentGuess && guess !== null} 
      solution = {solution}/>
      </div>
    )
  })};
    </div>
  )
}

export default Board;