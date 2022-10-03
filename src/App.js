import React, { useMemo, useRef, useState } from 'react';
import './App.css';

function App() {
  const displayRef = useRef(null);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [buttonState, setButtonState] = useState(false);

  const calculate = () => {
    if(num1 === "" || num2 === "")
    {
      return;
    }
    else
    {
      displayRef.current.innerHTML = "Sum = " +(Number(num1)+Number(num2));
    } 
  }

  const multiply = useMemo(() => {
    if(num1 === "" || num2 === "")
    {
      return;
    }
    console.log((Number(num1)*Number(num2)));

  }, [num1, num2])

  return (
    <div className="App">
      {multiply}
      <div className="row">
      <input type="number" onChange={e => setNum1(e.target.value)}/>
      <input type="number" onChange={e => setNum2(e.target.value)}/>
      <button onClick={calculate}>Calculate</button>
      </div>
      {(num1==="" || num2==="") ? null : <p ref={displayRef}></p>}
      <button style={{backgroundColor: buttonState? 'dodgerblue' : 'crimson'}} onClick={()=>{setButtonState(!buttonState)}}>Change Button Color</button>
    </div>
  );
}

export default App;
