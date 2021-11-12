import React from 'react';
 import {useHistory} from 'react-router';
 import { axiosWithAuth } from './utils/';

const Logout = () => {        
   

   axiosWithAuth()
   .post('http://localhost:5000/api/articles/:id')
   .then(response => {
       localStorage.removeItem('token')
       window.location.pathname = '/login'
   })
   .catch(error =>{
        console.log(error);
   })

return(

    <div>
        <h2>You are about to logout</h2></div>
)

    
}

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.