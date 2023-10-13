import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
import {Link} from "react-router-dom"
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext"

export default function Topbar() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const user = useContext(AuthContext);

  return (
    <div className="topbarContainer mb-1 flex relative justify-center z-20 bg-cyan-700">
    <div>
      <div className="topbarLeft  w-full" >
      <Link to="/">
        <span className="logo  ">FriendNest</span>
        </Link>
      </div>

      <div className="topbarCenter  ">
          <div className=" searchbar w-[550px] mx-auto  relative h-10 ">
                <Search className="searchIcon h-[30px] w-full absolute top-[1px]  " />
          <input placeholder="Search something"
            className="searchInput w-full
             tracking-wider rounded-xl pl-5 text-center " 
            type="text"
            ></input>
       
 
          </div>
         </div>
    

      <div className="topbarRight text-white flex items-center w-[100%] ml-5 justify-evenly">
        <p className="w- space-x-5">
        <span className="topbarLink   sm:inline-block">Homepage</span>
        <span className="topbarLink  sm:inline-block">Timeline</span>
        </p>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbatIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbatIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbatIconBadge">1</span>
          </div>
        </div>
{/*        <Link to={`/profile/${user.name}`}>
*/}        <img  src={user.profilePicture ? PF + user.profilePicture : PF+"person/noAvatar.jpg"
      } className="topbarImage"></img>
      {/*</Link>*/}
      </div>
    </div>
    </div>
  )
}