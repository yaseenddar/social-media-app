import { useRef } from "react";
import axios from "axios";
  import { toast } from 'react-toastify';

import {useNavigate} from "react-router-dom"
export default function Register() {
    const email = useRef();
    const name = useRef();
    const password = useRef();
    const confirmpassword = useRef();
    const navigate = useNavigate();
    const handleSubmit =async (e) => {
        e.preventDefault();
        if (password.current.value !== confirmpassword.current.value) {
            password.current.setCustomValidity("password don't match");
        }else{
        	const user = {
        		name: name.current.value,
        		email:email.current.value,
        		password:password.current.value
        	}
        	try{
        	const res = await axios.post("/auth/register",user);
        	console.log("res in register",res);
        	toast("logged in ")
        	  navigate("/login");

        	}catch(err){
        		console.log("error happened in registering",err);
        	}

        }


    }

    return (
        <div className="login w-full h-[100vh] bg-gradient-to-l from-green-300 to-blue-300 via-purple-200 flex items-center justify-center ">
		 	<div className="loginwrapper w-[70%] h-[70%] flex  ">
		 		<div className="loginleft w-[10px] flex-1 flex flex-col justify-center">
				<h3 className="loginLogo text-[70px] text-blue-700 tracking-wider">FriendNest</h3>
			
				 <span className="loginDesc text-2xl tracking-wider text-cyan-600">
					coonect to world on FriendNest.
				</span>

			    </div>
			    <div className="loginRight  flex-1 flex flex-col justify-center ">
			    	<form onSubmit={handleSubmit} className='loginBox h-[380px] p[20px] shadow-lg shadow-cyan-800 hover:h-[390px]
			    	 rounded-md flex flex-col justify-between p-3'>
			    	 	<input type="text" 
			    	 	placeholder="username"
			    	 	 ref={name} required
			    		className="loginInput  h-[50px] rounded-md border-2 border-solid
			    		focus:outline-0 border-gray-300 text-lg pl-5"
			    		/>
			    		<input type="Email"
			    		 required ref={email}
			    		 placeholder="enter email"
			    		 required
			    		 className="loginINput h-[50px] rounded-md border-2 border-solid
			    		 focus:outline-0 border-gray-300 text-lg pl-5 "
			    		
			    		/>
			    		<input type="Password"
			    		 placeholder="password"  
			    		 required ref={password} 
			    		 minLength="6"
			    		className="loginInput  h-[50px] rounded-md border-2 border-solid
			    		focus:outline-0 border-gray-300 text-lg pl-5"
			    		/>
						<input type="Password" 
						placeholder="confirm password "  
						minLength="6"  
						required ref={confirmpassword}
			    		className="loginInput  h-[50px] rounded-md border-2 border-solid
			    		focus:outline-0 border-gray-300 text-lg pl-5"
			    		/>
			    		<button type="submit"
			    		className="inputButton h-[50px] rounded-md border-none
			    		 text-[20px] text-white font-bold cursor-pointer bg-violet-500 hover:bg-violet-400  "
			    		>Sign Up</button>
			    		<button className="registerButton w-[50%] h-[50px] rounded-md border-none
			    		 text-[20px] text-white font-bold hover:bg-green-400 self-center cursor-pointer bg-green-500">Login to account</button>
			    	</form>
			    </div>
		 	</div>
			
		</div>
    );
}