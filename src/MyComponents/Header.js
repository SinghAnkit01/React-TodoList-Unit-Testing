import React from 'react'
import {Link} from "react-router-dom"
import PropTypes from 'prop-types'
import '../App.css';
export default function Header(props) {
  // mainly uses for defining variable 
  // put props in paranthesis and other child variable in curly braces for defining.
  // ({titles,title}) Header function is accepting value form parent component using component <Header/> , <Todos/>
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">{props.title}</Link>
        {/* Passing more than one value using parent component  by using curly braces */}
        {/* ?\props.title=Header.title */}
        {/* parent component with containing any variable we can fetch it by using props.<variable>  */}
        {/* Parent Component means <Header/>,<Footer/>,<Todos/> */}
        {/* we can pass more than one variable  */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-Link active" aria-current="page" to="/">Home</Link>
            </li>&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item">
              <Link className="nav-Link" to="/about">About Us</Link>
            </li>
          </ul>
          {props.searchbar ? <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> : ""}
          {/* if props.searchbar=true then show this form or else display no search-bar */}
          {/* true=? and false=":" */}
          {/* but in parent component we have pass props.search-bar={false} */}
          {/* this is the important syntax for jsx */}
          {/* for validating boolean variable we can use terneary operator like this{props.searchbar?.......:"statement"}npm   */}
        </div>
      </div>
    </nav>

  )
}
Header.defaultProps = {
  title: "Your Title Here",
  searchbar:true
}
// Header.propTypes = {
//   title: PropTypes.string,
// searchbar:PropTypes.bool.isRequired
//   // p is in capital while defining string(object).
//   // catches all the bug of string while during coding.
//   // we should always use stringtype during coding.
// importing header file as {import PropTypes from 'prop-types'}
// }
