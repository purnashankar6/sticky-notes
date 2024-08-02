import { useEffect, useState, useRef } from "react";
const StickIt = (props) =>{
    
    
    const [positions, setPositions] = useState(props.initials)
    const [isDraging, setIsDraging] = useState(false);
    const [startPosition , setStartPosition] = useState({x:0,y:0})

    const stickItRef = useRef(null)
    const handleMouseDown = (e) =>{
        setIsDraging(true);
        setStartPosition({x:e.clientX,y:e.clientY})
    }
    const handleMouseMove = (e) =>{
        if(isDraging){
        const diffX = e.clientX - startPosition.x
        const diffY = e.clientY - startPosition.y

        

        setPositions((prevValue)=>{
          //  { x:prevValue.x + diffX,y:prevValue.y+diffY}
            const newX = prevValue.x+diffX
            const newY = prevValue.y+diffY
            const rightX = Math.max(0,Math.min(newX, window.innerWidth-250))
            const rightY = Math.max(0,Math.min(newY, window.innerHeight-250)) 

            return{
                x:rightX,
                y:rightY
            }
        })
        setStartPosition({x:e.clientX,y:e.clientY})
        }
        
    }

    const handleMouseUp = () =>{
        
        setIsDraging(false)
    }
    useEffect(()=>{
        if(isDraging){
            window.addEventListener('mousemove',handleMouseMove)
            window.addEventListener('mouseup',handleMouseUp)
        }else{
            window.removeEventListener('mousemove',handleMouseMove)
            window.removeEventListener('mouseup',handleMouseUp)
        }
        return ()=>{
            window.removeEventListener('mousemove',handleMouseMove)
            window.removeEventListener('mouseup',handleMouseUp)
        }
    },[isDraging])
   const style={
        backgroundColor:"#AFA1AF",
        position:"absolute",
        left:`${positions.x}px`,
        top:`${positions.y}px`,
        width:"200px",
        border: "black 1px solid",
       // cursor:"move",
        cursor: isDraging ? 'grabbing' : 'grab',
        userSelect:"none",
        padding: "10px",
       
    }
    return(
        <div style={style} ref={stickItRef} onMouseDown={handleMouseDown}>
            
        <h4>📌{props.data}</h4>
        </div>
    )
}

export default StickIt;