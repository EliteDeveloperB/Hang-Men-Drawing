const HEAD = (
    <div className="w-12 h-12 border-8 border-black absolute top-8 -right-6 rounded-full"></div>
);
const BODY = (
    <div className="w-2 h-40 bg-black absolute top-18 -right-1"></div>
);
const RIGHt_ARM = (
    <div className="w-16 h-2 bg-black absolute top-28 -right-16 -rotate-24"></div>
)
const LEFT_ARM = (
    <div className="w-16 h-2 bg-black absolute top-28 right-0 rotate-24"></div>
)
const RIGHt_LEG = (
    <div className="w-16 h-2 bg-black absolute top-60 -right-14 rotate-42"></div>
)
const LEFT_LEG = (
    <div className="w-16 h-2 bg-black absolute top-60 -right-2 -rotate-42"></div>
)
type HandmanDrawingProps = {
   numberOfGuessed:number 
}
const BOODY_PARTS = [HEAD,BODY,RIGHt_ARM,LEFT_ARM,RIGHt_LEG,LEFT_LEG]

function HangMenDrawing({numberOfGuessed }:HandmanDrawingProps) {
  return (
    <div className="relative">
      {BOODY_PARTS.slice(0,numberOfGuessed)}
        <div className=" absolute top-0 right-0 w-2 h-10 bg-black "></div>
        <div className="w-34 h-3 bg-black ml-18"></div>
        <div className="w-2 h-80 bg-black ml-18"></div>
        <div className="w-40 h-3 bg-black"></div>

    </div>
  )
}

export default HangMenDrawing