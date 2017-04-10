
const initialState = {
	login: false,
	id: "", 
	address: "",
	username: "",
	passphrase: "",
	coin: "",
	message: ""
}

const login = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN':
			var data = action.data.data; 
			return Object.assign ({},state,{login: true,
				id: data.id, 
				address: data.address,
				username: data.username,
				passphrase: data.passphrase,
				coin: data.coin })
		case 'LOGOUT':
			var data = action.data.data; 
			return Object.assign ({},state,initialState)
		case 'ERROR':
			var data = action.data.data;
			return Object.assign ({},state,{login: false, message: data})
		default:
			return state;
	}
};

export default login;