import React from 'react'

const TodoItem = ({todo,onDelete}) => {
  return (
    <>
    <div> 
      {/* <h1>{todo.sno}</h1> */}
      {/* todo contains all the array element i.e.(sno,desc,title) */}
     <h4>{todo?.title}</h4>
     <p>{todo?.desc}</p>
     <button className="btn btn-sm btn-danger" data-testid="todo-test" onClick={ () => {onDelete(todo)}}
     >Delete</button>
     {/* onclick={onDelete("at the time of function call")} */}
     {/*onDelete() function will call itself at the time of rendering */}
     {/* values are coming from app.js array element containing srno,desc and title */}
     {/* arrow function syntax onDelete = () => {onDelete(todo)} */}
     {/* Calling and passing onDelete method with task */}
    </div><hr/></>
  )
}

export default TodoItem
