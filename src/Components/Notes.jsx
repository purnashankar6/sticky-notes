import { useEffect , useState } from "react";
import StickIt from "./StickIt";

const Notes = (props) =>{
    const [initialized, setInitialized] = useState(false);
    const {notes=[] , setNotes=()=>{}} = props;
    useEffect(()=>{
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        const updatedNotes = notes.map((note)=>{
            const savedNote = savedNotes.find((n)=>n.id==note.id)
            if(savedNote){
                return {...note, position:savedNote.position}
            }
            else{
                const position = findPlace()
                return {...note , position};
            }
        })
        setNotes(updatedNotes)
        setInitialized(true);
        localStorage.setItem("notes",JSON.stringify(updatedNotes))
      },[])
      function findPlace(){
            const maxX = Math.floor(Math.random()*(window.innerWidth - 250));
            const maxY = Math.floor(Math.random()*(window.innerHeight - 250));
            return{
            x:maxX,
            y:maxY
            }
        }
    return(
        <div>
            {initialized && notes.map((note)=>{
                return <StickIt key={note.id} initials={note.position} data={note.text}/>
            })}
            
        </div>
    )
}

export default Notes;