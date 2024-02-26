import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  function increFun(){
    setCount((prev)=>prev+1);
    setCount((prev)=>prev+1);
    return setCount((prev)=>prev+1);//u can also write callback inside setFun & access of prev value as paramater of that callback
  }
  function decreFun(){
    //  setCount(count-1);
    //  setCount(count-1);
    //  setCount(count-1);
    //  setCount(count-1);
    // return setCount(count-1);
             setCount((prev)=>prev-1);
             setCount((prev)=>prev-1);
      return setCount((prev)=>prev-1);
  }

  return (
    <>
      <h1>Header : {count}</h1>
      <h2>Counter Increment & Decrement </h2>
      <button onClick={increFun}>Increment : {count}</button>
      {" "}
      <button onClick={decreFun}>Decrement : {count} </button>
      <h1>Footer : {count}</h1>
    </>
  )
}

export default App
