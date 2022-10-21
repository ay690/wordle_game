import React from 'react'
import  "./style.css"

let WORD_SIZE = 5;

const Line = ({ guess, isFinal, solution }) => {
let tiles = [];

  for(let i = 0; i < WORD_SIZE; i++){
   let char = guess[i];

   let className = 'tile'
   
   if(isFinal){
    if(char === solution[i]){
        className += 'correct'
    }else if(solution.includes(char)){
       className += 'close'
    }else{
      className += 'incorrect'
    }
   }

   tiles.push(<div key = {i} className= {className}>{char}</div>);
  }


  return (
    <div className = "line">{tiles}</div>
  )
}

export default Line;