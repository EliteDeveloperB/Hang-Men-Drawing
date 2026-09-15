const KEYS = [
"a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z"
]
type KeyboardProps = {
  disabled ?:boolean
  activeLetters:string[]
  inactiveLetters:string[]
  addGuessedLetter:(letter:string)=> void
}

function Keyboard({activeLetters,inactiveLetters,addGuessedLetter,disabled= false}:KeyboardProps) {
  return (
    <div className="grid grid-cols-10 gap-2 shadow-2xl p-2 rounded m-6">
      {KEYS.map((key)=> {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return <button
        onClick={()=>addGuessedLetter(key)}
        key={key}
          className={` py-0 px-4 uppercase bg-gray-700 text-red-600 border border-red-500 rounded shadow
            ${isActive ?"bg-green-600" : ""}
            ${isInactive ?"opacity-50":""}
          `}
          disabled = {isInactive || isActive || disabled } >
            {key}
            </button>
      })}
    </div>
  )
}

export default Keyboard