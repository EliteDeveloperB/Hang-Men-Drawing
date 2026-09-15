type HandmenProps = {
  guessedLetters:string[]
   wordtoGuesse:string
   reveal?:boolean
}
function HangMenWord({guessedLetters, wordtoGuesse,reveal= false}:HandmenProps) {


  return (
    <div className="flex text-8xl gap-2 uppercase font-mono">
      {wordtoGuesse.split("").map((letter,index)=>(
        <span className="border-b-2" key={index}>
          <span className=
          {`
            ${guessedLetters.includes(letter)|| index === 0 || reveal ? "opacity-100" : "opacity-0" }
            ${!guessedLetters.includes(letter) && reveal ? "text-red-600" : "text-black"}
            `}>
          {letter}
          </span>
          </span>
      ))
      }
    </div>
  )
}

export default HangMenWord