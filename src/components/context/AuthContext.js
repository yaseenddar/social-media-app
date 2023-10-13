import {createContext,useReducer} from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE ={
	user: null,
	isFetching:false,
	error:false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider =({children}) => {
	const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);

	return (
		<AuthContext.Provider
		value ={{
			isLogin:state.isLogin,
			user:state.user,
			isFetching:state.isFetching,
			error: state.error,
			dispatch//this is used the update the initail state
		}}>
		{children}
		</AuthContext.Provider>
		);
};