import axios from 'axios';
import axiosWithAuth from './utils';

    const axiosWithAuth = ()=> {
      const token = localStorage.getItem('token'),
        return axios.create({

          
            headers: {
              authorization:token 
            },
            baseURL: 'http://localhost:5000/api/articles/',
          }); 
    } 


export default axiosWithAuth;

//Task List:
//1. Complete axiosWithAuth