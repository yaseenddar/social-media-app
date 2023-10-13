



export default function Online({User}){

       const PF = process.env.REACT_APP_PUBLIC_FOLDER;

	return(
		<div>
	    <li className="rightbarFriend flex items-center mb-2">
           <div className="rightBarProfileImgContainer mr-[10px] relative">
              <img 
             className="rightBarProfileImg w-[40px] h-[40px] rounded-[50%] object-cover"
             src={PF+User.profilePicture}
             alt=""></img>
             <span 
             className='rightbarOnline w-[12px] h-[12px] rounded-[50%] bg-lime-600
             absolute top-[2px] right-1 order-11 border-[1px] border-solid border-white'

             />
             </div>
           <span className="rigtBarUserName font-bold">
             {User.username}
           </span>

        </li>
		</div>
		);
}