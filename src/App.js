import React, { useEffect, useState } from "react"
import WORDS from "./data/Words";
import Board from "./components/Board";

//const API = "https://api.frontendexpert.io/api/fe/wordle-words"

function App() {
 //console.log(WORDS)
 const[words, setWords] = useState(WORDS);
 const[solution, setSolution] = useState(""); 

useEffect(() => {
  const fetchData = async () => {
    await setWords(WORDS);
    setSolution(words[Math.floor(Math.random() * words.length)])
    // const randomWord = data[Math.floor(Math.random() * data.length)];
    // setSolution(randomWord)
  }
  fetchData();
}, []);

  return (
    <div >
    {solution}
    <Board solution = {solution} />
    </div>
  );
}

export default App;