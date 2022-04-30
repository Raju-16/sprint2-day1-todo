import { useState } from "react"
import { TodoList } from "./TodoList"
import "./Todo.css"

function Todo(){
    const [todo,setTodo]=useState([])
    const [text,setText] = useState("");
   
   
    const getData = (Td)=>{
       //console.log("received",data)
       setTodo([...todo,Td])
   }
   
    return (
        <div className="todo">
          
          <input onChange={(e)=>{
                // console.log(e.target.value)
                setText(e.target.value)
            }} 
            type="text"
             placeholder="Enter todo" className="input"/>
            <button onClick={()=>{
                getData(text);
            }} className="button">+</button>

            
          <TodoList todoList={todo}  /> 
          
        </div>
    )
}

export {Todo}