import React, { useState } from 'react'
import './footer.css';
// import donetodo from './donetodo.js';
// import activetodo from './activetodo.js';

const Addtodo = ({addTodo}) => {
    // addTodo is the prop contains data of title and desc but in actual it is a object.
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

    const submit = (e) =>{
        // passing e parameter as a event
  e.preventDefault();
  //   This will going to prevent page from loading
  if(!title || !desc){
      alert("Title and description can't be empty");
  }
  else{
 addTodo(title,desc);
//  creating function as addTodo and initializing it in App.js as const addTodo=(console.log("hii"))=>{}
setTitle("");
setDesc("");
  }
// using usestate for fetching title and desc i.e. setTitle and setDesc
    }
    // Adding forms from getBootstrap.com
    return (
        <div className="container my-3" >
            <h3>
                Add a todo
                </h3>
            <form onSubmit={submit} >
                {/* after submitting this form submit() will get called sucessfully */}
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text"  className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="title"  />
                   </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" className="form-control"  value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc" />
                </div>
               
                <button type="submit" className="btn btn-sm btn-success" >Add Todo</button>
                {/* &nbsp;&nbsp;<button type="button" className="btn btn-sm btn-danger" onClick={() =>activetodo()} >Active Todos</button>
                &nbsp;&nbsp;<button type="button" className="btn btn-sm btn-success" onClick={() =>donetodo()} >Done Todos</button> */}
            </form>
        </div>
    )
}

export default Addtodo
