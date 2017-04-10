import axios from 'axios';

export const REQ_DATA = "REQ_DATA";
export const RES_DATA = "RES_DATA";
export const LOGIN = "LOGIN"; 
export const LOGOUT = "LOGOUT"; 


export function reqData() {
  return {
    type: REQ_DATA
  }
}

export function resData(products) {
  return {
    type: RES_DATA,
    products
  }
}

export const loginRoute = (username, password)=> (dispatch, getState)=>{
    return axios({
      method: 'post',
      url: '/login',
      data: {
        'username': username,
        'password': password
      }
    }).then((response)=>{
        if(response.data === "no username in database"){
          dispatch({ 
            type: 'ERROR',
            data:response 
          });      
        }else if(response.data ==="incorrect password"){
          dispatch({ 
            type: 'ERROR',
            data:response 
          });      
        }else{
          dispatch({ 
            type: 'LOGIN',
            data:response 
          });      
        }
    }).catch((error)=>{
      return{
        type: "ERROR",
        response: error
      };
    });
}

export const logoutRoute = () =>(dispatch, getState) => {
  return axios({
    method: 'get',
    url: '/logout'
  }).then((response)=>{
      dispatch({ 
          type: 'LOGOUT',
          data:response 
        });      
  }).catch((error)=>{
      dispatch({ 
          type: 'LOGOUT',
          data:error
      });      
    })
}
  






