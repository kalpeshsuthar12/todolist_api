import React,{ useState } from 'react'
import { useDispatch } from "react-redux";
import { addtodo } from '../redux/action/index'

export default function Input() {

  const dispatch = useDispatch();
  const [title, setTitle] = useState(""); //title input

  return (
    <div className="addtask">
        <input placeholder="Enter a task..." value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <button onClick={()=>{dispatch(addtodo(title)); setTitle("")}}>Add task</button>
    </div>
  )
}
