import { useEffect, useState } from 'react'
import Notes from './Components/Notes'

import './App.css'

function App() {
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
      <Notes notes={notes} setNotes={setNotes} />
    </>
  )
}

export default App
