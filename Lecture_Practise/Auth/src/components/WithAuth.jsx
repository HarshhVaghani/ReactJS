import React from 'react'

// HOC Functionality

// HOC Recursive Functionality

// Recursion

// React-Router-DOM

// authModule : menual (username , password) login

// localStorage , sessionStorage

// CRUD in ReactJS

// ecommerce , article , blog

// article menupilate


const WithAuth = (WrappedComponent) => {

  return function AuthComponent(props){

    const inLoggedIn = props.isLoggedIn;
    const setIsLoggedIn = props.setIsLoggedIn;

    console.log('inLoggedIn' , inLoggedIn);
    console.log('setIsLoggedIn' , setIsLoggedIn);
    
    if(!inLoggedIn){
      return <h2>Please Login and continue.....</h2>
    }

    return <WrappedComponent {...props}/>
  }
}

export default WithAuth