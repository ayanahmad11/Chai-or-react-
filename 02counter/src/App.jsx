import { useState } from 'react'

import './App.css'

function App() {
  let [counter,setcounter] = useState(15)
  // let counter = 15
  const addValue = () =>{
  console.log('clicked',counter);
  // counter+=1;
  // console.log("value added",Math.random());
  
  setcounter(counter+1)

  // setcounter(counter+1)  all of these would go in a batch so tree diff algo 
                            // only implement the counter+1; 
  // setcounter(counter+1)
  // setcounter(counter+1)

  // setcounter(prevCounter => prevCounter+1) this would increase value by 4
  // setcounter(prevCounter => prevCounter+1)
  // setcounter(prevCounter => prevCounter+1)
  // setcounter(prevCounter => prevCounter+1)  
 }
 const removeValue = () =>{
  setcounter(counter-1)
 }

  return (
    <>
      <h1>chai or react</h1>
      <h2> counter value:{counter} </h2>
      <button onClick={addValue}>
         Add value : {counter}
      </button> 
      <br/>
      <br/>
      <button onClick={removeValue}>
        remove value : {counter}
      </button>

    </>
  )
}

export default App
