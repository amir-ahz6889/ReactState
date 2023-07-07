import { useState } from "react"

const messages = ["ماهی 😀", 'شامپانزه 😂', 'انسان 🤗']
// let step=3

export const Steps = () => {
  const [step,setstepp]=useState(3)
  const handelNextClick=()=>{
    if(step < 3){
      setstepp(step + 1)
    }
    // setstepp(step+1)
  }
  const handelPrevClick=()=>{
    if(step > 1){
      setstepp(step - 1);
    }
    // setstepp(step-1)
  }
  
  return (
        <div className='steps'>
        <div className='numbers '>
            <div className={step >=1 ? 'active' : ''}>1</div>
            <div className={step >=2 ? 'active' : ''}>2</div>
            <div className={step >=3 ? 'active' : ''}>3</div>
        </div>
        <p className='message'>{messages[step -1]}</p>
        <div className='buttons'>
            <button onClick={handelPrevClick} >قبلی</button>
            <button onClick={handelNextClick}>بعدی</button>
        </div>
    </div>
  )
}
export default Steps;