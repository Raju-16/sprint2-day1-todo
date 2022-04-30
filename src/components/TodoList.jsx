
import TodoItem from "./TodoItem";

export const TodoList = ({todoList})=>{


    console.log(todoList)


    return (
        <div>
            {todoList.map((e)=>(
                <TodoItem todo={e}/>
          ))} 
        </div>
    );

}
