import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Link,  Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./Layout.css";
import { Outlet } from 'react-router-dom';

const Layout = () => {
   
  return (
 
    <div>
    
    
    
<nav class="navbar navbar-expand-lg navbar" style={{backgroundColor:"white", color:"white"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">My div</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Home">Home</a>
         
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Contact">Contact</a>
        </li>
        <li class="nav-item">
         
        </li>
      </ul>
    </div>
  </div>
</nav>
<main><Outlet/></main>
<footer>
  <h1>Footer</h1>
</footer>
   </div>
  )
}

export default Layout