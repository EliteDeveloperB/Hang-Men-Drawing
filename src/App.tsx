import { useCallback, useEffect, useState } from "react"
import words from "./wordList.json"
import HangMenDrawing from "./HangMenDrawing";
import HangMenWord from "./HangMenWord";
import Keyboard from "./Keyboard";
function getWord(){
 return words[Math.floor(Math.random()* words.length)]
}
function App() {

  const [wordToGuess,setWordToGuess]= useState(getWord)
 const [guessedLetters,setGuessedLetters]= useState<string[]>([])
  const inCorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))
const isLoser = inCorrectLetters.length >= 6
const isWinner = wordToGuess.split("").every((letter,index) =>index === 0 || guessedLetters.includes(letter))
 const addGuessedLetter = useCallback((letter:string)=>{
  if(guessedLetters.includes(letter)|| isLoser || isWinner)return
  setGuessedLetters(currentLetters => [...currentLetters,letter])
 },[guessedLetters,isLoser ,isWinner])
  useEffect(()=>{
    const handler = (e:KeyboardEvent)=>{
      const key = e.key
      
      if(key != "Enter") return
      e.preventDefault()
      setGuessedLetters([])
    setWordToGuess(getWord())
     
    }
    document.addEventListener("keypress",handler);
    return ()=> {
      document.removeEventListener("keypress",handler)
    }
  },[guessedLetters])
  return (
  <div className=" max-w-[800px] h-screen flex flex-col justify-between gap-1 mx-auto items-center">
    <div className="text-4xl text-center">
      {isWinner && "Winnwe! - Refresh to try agin"}
      {isLoser && "Nise try - Refresh to try agin"}
    </div>
    <HangMenDrawing numberOfGuessed= {inCorrectLetters.length} />
    <HangMenWord
    reveal={isLoser} guessedLetters={guessedLetters} wordtoGuesse={wordToGuess}/>
    <Keyboard
    disabled = {isLoser || isWinner}
     activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter  ))} 
       inactiveLetters = {inCorrectLetters}
      addGuessedLetter = {addGuessedLetter}
      />

  </div>
  )
}

export default App
