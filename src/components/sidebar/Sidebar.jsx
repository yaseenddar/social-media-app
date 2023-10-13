import "./sidebar.css"
import ChatIcon from '@mui/icons-material/ChatBubble';
import {RssFeed} from "@mui/icons-material"
import BookmarkIcon from '@mui/icons-material/Bookmark';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupsIcon from '@mui/icons-material/Groups';
import DeviceUnknownIcon from '@mui/icons-material/DeviceUnknown';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import {Users} from "../../dummyData"
import Friends from "../friends/Friends"
export default function Sidebar() {
  return (
    <div className="sidebar h-[100vh] overflow-y-scroll sticky top-[50px] ">
      <div className="sidebarWapper text-left ml-[20px]">
        <ul className="sidebarList p-4">
          <li className="sidebarListItem mb-[20px]">
            <RssFeed className="sidebarIcon mr-[15px] "/>
            <span>Feed</span>
          </li>
          <li className="sidebarListItem mb-[20px]">
            <ChatIcon className="sidebarIcon mr-[15px] "/>
            <span>Chats</span>
          </li>
          <li className="sidebarListItem mb-[20px]">
            <VideocamIcon className="sidebarIcon mr-[15px]"/>
            <span>Videos</span>
          </li>
          <li className="sidebarListItem mb-[20px]">
            <GroupsIcon className="sidebarIcon mr-[15px]"/>
            <span>Groups</span>
          </li>
          <li className="sidebarListItem mb-[20px]">
            <BookmarkIcon className="sidebarIcon mr-[15px]"/>
            <span>Bookmarks</span>
          </li>
          <li className="sidebarListItem mb-[20px]">
            <DeviceUnknownIcon className="sidebarIcon mr-[15px]"/>
            <span>Questions</span>
          </li>
          <li className="sidebarListItem mb-[20px]">
            <WorkIcon className="sidebarIcon mr-[15px] "/>
            <span>Jobs</span>
          </li>
          <li className="sidebarListItem mb-[20px]">
            <EventIcon className="sidebarIcon mr-[15px] "/>
            <span>Events</span>
          </li>
          <li className="sidebarListItem mb-[20px]">
            <SchoolIcon className="sidebarIcon mr-[15px]" />
            <span>Courses</span>
          </li>
        </ul>
        <button className="sidebarButton bg-slate-300 ml- w-[150px] p-[10px] rounded-[5px] font-medium border-none">
          Show More</button>
        <hr className=" my-[20px] mx-0 h-[2px] bg-slate-300"/>

          {/* firend list */}
        <ul className="sidebarFriendList">

        {
          Users.map((u)=>(
            <Friends key={u.id} user={u} />
            ))
        }
        </ul>
      </div>
   
    </div>
  )
}
