import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  function increFun(){
    return setCount(count+1);//u can also write callback inside setFun & access of prev value as paramater of that callback
  }
  function decreFun(){
    return setCount(count-1);//u can also write callback inside setFun & access of prev value as paramater of that callback
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
