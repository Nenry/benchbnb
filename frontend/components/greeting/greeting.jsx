import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {

  const newSessionGreeting = () => {
    return (
      <div>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/Login'>Login</Link>
      </div>

    );

  };



  const personalGreeting = () => {
    return(
      <h1>Hello {currentUser.username}</h1>,
      <button onClick={()=>logout()}></button>
    );
  };

return currentUser ? personalGreeting() : newSessionGreeting();

};


export default Greeting;
