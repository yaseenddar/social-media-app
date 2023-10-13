import {loginCall} from "../../apiCalls"
import {useContext,useRef} from "react";
import {AuthContext} from "../../components/context/AuthContext"

export default function Login(){
	const email = useRef();
	const password = useRef();
	const {user,isFetching,error,dispatch} = useContext(AuthContext);

	const handleClick = (e) =>{
		e.preventDefault(); 
		
		loginCall({email:email.current.value,password:password.current.value},dispatch);
		
	} 
 

	return(
		<div className="login  w-full h-[100vh] bg-gradient-to-l from-green-300 to-blue-300 via-purple-200 flex items-center justify-center ">
		 	<div className="loginwrapper w-[70%] h-[70%] flex  ">
		 		<div className="loginleft w-[10px] flex-1 flex flex-col justify-center">
				<h3 className="loginLogo text-[70px] text-blue-700 tracking-wider">FriendNest</h3>
			
				 <span className="loginDesc text-2xl tracking-wider text-cyan-600">
				coonect to world on FriendNest.
				</span>

			    </div>
			    <div className="loginRight  flex-1 flex flex-col justify-center ">
			    	<form onSubmit={handleClick} className='loginBox h-[300px] p[20px] shadow-lg shadow-cyan-800 hover:h-[310px]
			    	 rounded-md flex flex-col justify-between p-3'>
			    	 
			    		<input type="Email" required
			    		className="loginInput h-[50px] rounded-md border-2 border-solid
			    		focus:outline-0 border-gray-300 text-lg pl-5 "
			    		placeholder="enter email" required ref={email}
			    		/>
			    		<input type="Password" minLength="6"
			    		 placeholder="password" required ref={password}
			    		className="loginInput  h-[50px] rounded-md border-2 border-solid
			    		focus:outline-0 border-gray-300 text-lg pl-5"
			    		/>
			    		<button className="inputButton h-[50px] rounded-md border-none
			    		 text-[20px] text-white font-bold cursor-pointer bg-violet-500 hover:bg-violet-400  "
			    		>{ 
			    			isFetching ? 
			    			" login":
			    			"fetching" 
			    		}
			    		</button>
			    		
			    		<span className="inputForgot text-center text-[#66CDAA] cursor-pointer ">forgot password</span>
			    		<button className="registerButton w-[50%] h-[50px] rounded-md border-none
			    		 text-[20px] text-white font-bold hover:bg-green-400 self-center cursor-pointer bg-green-500">Crate a New Account</button>
			    	</form>
			    </div>
		 	</div>
			
		</div>
		);
}