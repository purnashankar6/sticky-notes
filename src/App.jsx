import { useEffect, useState } from 'react'
import Notes from './Components/Notes'
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { findPlace } from './utils';

function App() {
  const [input, setInput] = useState("")
  const [notes, setNotes] = useState([
    {
      id:1,
      text:"Wake up man! hurry up "
    },
    {
      id:2,
      text:"Hit the Gym"
    }
    ])
    
    
  return (
    <>
      <input style={{ width: "80%",
                      padding:" 12px 20px",
                      margin:" 8px 0",
                      boxSizing: "border-box"
                    }} 
           type="text" 
           placeholder="new to do"  
           onChange={(e)=>setInput(e.target.value)} 
           value={input}/>
      <button style={{background:"#04AA6D",
                      border:"none",
                      color:"white",
                      textAlign:"center",
                      padding:"15px 30px"}}
        onClick={()=>setNotes([...notes,{id:uuidv4(),text:input,position:findPlace()}])}>
      Add</button><br/>
      <Notes notes={notes} setNotes={setNotes} />
    </>
  )
}

export default App
