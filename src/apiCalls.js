import axios from "axios";


export const loginCall = async(userCredential,dispatch) => {
	try{ 
		const res = await axios.post("auth/login",userCredential);
		
		dispatch({ type:"LOGIN_SUCCESS", payload:res.data});//saves the data in the payload and the updates
															// the initial state in the context api
	}catch(err){
		console.error(err)
				dispatch({ type:"LOGIN_FAILURE", payload:err});


	}
};