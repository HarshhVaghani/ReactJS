import { useRef } from "react";

// Why Use Ref?

/*

Focus on input field
Access Dom Value without re-render
Control media(audio / video)
Interated third-party libraries

// const ref = useRef(initialValue)

*/

const UseRef1 = () => {

  const refInput1 = useRef(null);
  const refInput2 = useRef(null);
  const maindiv = useRef(null)

  const focusInput = () => {
    let ref = refInput1.current.focus();
    let refValue1 = refInput1.current.value;
    let refValue2 = refInput2.current.value;
    maindiv.current.style.backgroundColor = "orange"
    maindiv.current.style.height = "100px"
    maindiv.current.style.width = "100px"
    console.log(ref);
    console.log(refValue1);
    console.log(refValue2);
  };

  return (
    <div>
      <h1 className="heading">useRef in React</h1>
      <h2 className="sub-heading">Input Focus using useRef</h2>
      <input type="text" name="" id="" ref={refInput1} />
      <input type="text" name="" id="" ref={refInput2} />
      <div ref={maindiv}></div>
      <button className="btn" onClick={focusInput}>
        focus
      </button>
    </div>
  );
};

export default UseRef1;
