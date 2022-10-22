import React from 'react'
import TodoItem from './TodoItem';
// import TodoItem from '../MyComponents/TodoItem';
// 
// import App from './MyComponents/App.js'
const Todos = (props) => {
let myStyle = {
    minHeight:"70vh",
    margin:"20px auto",
    padding:"10px",
    display:"flex-coloumn ",
    // display:"none",
    }
  return (
    <div className="container" style={myStyle}>
      <h3 className="">Todos List</h3>
      {props.todos?.length == 0 ? "No todos to display" :
        
          props.todos?.map((todo) => {
            return(
         
             <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}  />

             
             
            // map() use to define pre-defined todos in container
            //  return  <TodoItem todo={props.todos[1]}/>
            // props.todos.map() excepts more than three element but not more than three variables
          )})
        }

        
    
      {/* props.todos.map((todo)=>{}) */}
      {/* <TodoItem todo={props.todos[1]}/> */}
      {/* fetching array element from app.js as array variable todos and same as object name */}
    </div>
  )

 
}




export default Todos




