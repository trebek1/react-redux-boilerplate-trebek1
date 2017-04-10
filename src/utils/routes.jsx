import axios from 'axios'; 

export function signup(username, password, confirm){
  if(password === confirm){
    axios({
      method: 'post',
      url: '/node/wallet',
      data: {
        'id': username,
        'passphrase': username,
        'type':"pubkeyhash"
      }
    }).then((resp)=>{

    return axios({
      method: 'post',
      url: '/signup',
      data: {
        'username': username,
        'password': password,
        'confirm': confirm,
        'id': resp.data.id,
        'passphrase': username,
        'address': resp.data.account.receiveAddress,
        'coin': 0
      }
    }).then((resp)=>{
      if(resp.data === 'already in database'){
        this.setState({
          message: "username already taken"
        });
      }else if(resp.data === "Error: username already taken"){
        this.setState({
          message: "Error: username already taken"
        });
      }else{
        this.setState({
          message: "Username created successfully!"
        });
      }
    }).catch((err)=>{
      this.setState({
        message: "Error in Signup",
        error: err
      });
    });
  })}else{
    this.setState({
      message: "Passwords Do Not Match" 
    });
  }   
}


export function getSession(){
  axios({
    method: 'get',
    url: '/session'
  }).then((response)=>{
    if(response.data){
      this.setState({
      loggedIn : true,
      id: response.data._id
    });  
    }
    return response; 
  }).catch((error)=>{
    console.log('error', error)
    return error; 
  }) 
}

