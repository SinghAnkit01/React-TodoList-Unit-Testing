// import logo from './logo.svg';
import './App.css';
// import header from "./Mycomponents/header";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
// import Todo from "./MyComponents/Todo";
// import activetodo from './MyComponents/activetodo';
// import donetodo from './MyComponents/donetodo'
import Todos from "./MyComponents/Todos";
import Addtodo from "./MyComponents/Addtodo";
import About from "./About";
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
// useState s is capital
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  //  ,JSON.stringify(todos));
  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    // Deleting this way in react does not work;
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);
    // Filter() is higher order array element.
    // (todos.filter((e)=>{}));
    // initializing setTodos() method.
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.getItem("todos");
  }
  const addTodo = (title, desc) => {
    console.log("I am adding this Todo", title, desc)
    // creating myTodo object
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    // let sno; 
    // why length-1 because index of todos are bydefault starts from 0
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    // this.sno:sno;
    // this.title;title
    // this.desc:desc,
    setTodos([...todos, myTodo]);
    console.log(myTodo);


    // creating an array of setTodods and passing newly created todos to update in daily todo item;
    // .... means sno,title,desc
  }



  // function with return-type and argument
  // const as a void addTodo is a function-name() title and desc are arguments
  // let initTodo;

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  // setTodos is a function which will going to update todos in each time of updation;




  // let todos=[{define as much as variable you can},{same},{same}]
  //  let isdemo=true;
  return (

    <>
      {/* Header and footer is always going to be render */}
      {/* these two components is going to be render when /<-(slash) will be the end point */}
      <Router>
        <Header title="My Todos-List" searchbar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Addtodo addTodo={addTodo} />

                <Todos todos={todos} onDelete={onDelete} />
                {/* passing array variable name with js object as {todos} */}
                {/* /* also, Passing onDelete method with todos array to Todoitem */}
              </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        {/* route , home,switch this are the components */}

        <Footer />
      </Router>

    </>
  );
}
export default App;



{/* <Addtodo addTodo={addTodo} />

<Todos todos={todos} onDelete={onDelete} />
        <Footer/> */}





