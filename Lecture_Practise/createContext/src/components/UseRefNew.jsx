import { useRef , useState } from "react"


const UseRefNew = () => {

  const [value , setValue] = useState('') 

  const refInput = useRef(null)

  const handleInputFocus = () => {
    refInput.current.focus()
  }

   const handleInputBlur = () => {
    refInput.current.blur()
  }

  const handleInputValue = () => {
    setValue(refInput.current.value)
  }

  return (
    <div>
      <input type="text" name="" id="" ref={refInput} />
      <span>{value}</span>
      <button className="btn" onClick={handleInputFocus}>Focus</button>
      <button className="btn" onClick={handleInputBlur}>Blur</button>
      <button className="btn" onClick={handleInputValue}>Value</button>
    </div>
  )
}

export default UseRefNew