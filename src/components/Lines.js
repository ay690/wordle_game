import React from 'react'
import styles from "./index.module.css"

let WORD_SIZE = 5;

const Line = ({ guess }) => {
let tiles = [];

  for(let i = 0; i < WORD_SIZE; i++){
   let char = guess[i];
   tiles.push(<div key = {i} className={styles.tile}>{char}</div>);
  }


  return (
    <div className = {styles.line}>{tiles}</div>
  )
}

export default Line;