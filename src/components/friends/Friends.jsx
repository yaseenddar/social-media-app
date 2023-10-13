


export default function Friends({user}){
      const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (

          <li className="sidebarFriend flex items-center mb-[15px]">
            <img className="sidebarFriendImg w-[32px] h-[32px] mr-[10px] rounded-[50%] object-cover" 
            src={PF+user.profilePicture}
            ></img>
            <span className="font-bold">
              {
                user.username
              }
            </span>
          </li>

         
    )

}