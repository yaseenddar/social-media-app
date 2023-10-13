import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Topbar from "../../components/topbar/Topbar"
import Rightbar from "../../components/rightbar/Rightbar"
import "./profile.css"
import {useState,useEffect }from "react"
import {useParams} from "react-router"
import axios from "axios"
export default function Profile() {

    const [user, setUser] = useState({});

    const name = useParams().name;
    console.log(name);
    useEffect(() => {
        // console.log("this is post");
        const fetchUser = async () => {
            try {
                //console.log(post.userId)
                const res = await axios.get(`/users/?name=${name}`);
             console.log("res", res.data)
                setUser(res.data); // Assuming your posts are in the response data
                // console.log("user",user)
            } catch (error) {
                console.error("Error fetching in posts in profile ", error);
            }
        };
        fetchUser();
    }, [name]);
   
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return ( <
        >
        <Topbar  user={user}  /> <
        div className = "profile flex ">
        <Sidebar/> <
        div className = "profileRight " >
        <div className="profileRightTop flex flex-col h-[390px]">
					<div className="profileCover mb-[250px] relative w-full ">
											<img
						className="profileCoverImg absolute w-full h-[250px]  object-cover"
						 src={user.profilePicture ? `${PF}${user.profilePicture}` : PF+"person/noCover.png"} alt="CoverPIC"/>
						<img
						className="profileUserImg object-cover w-[150px] h-[150px] object-cover absolute left-0 right-0 
						mx-auto top-[170px] rounded-[50%] border-2 border-solid border-white"
						 src={user.profilePicture || PF+"person/noAvatar.jpg"}
						  alt="profilePIC"/>
					</div>

					
					<div className="profileInfo flex flex-col items-center justify-center mt-20">
						 <h4 className="profileInfoName text-2xl  font-bold" >{user.name}</h4>
						 <span className="profileInfoDesc font-light"> {user.desc}</span    >
					</div>
				</div>

        <
        div className = "profileRightBottom flex" >
        <Feed name={name}/> <
        Rightbar user={user} / >
        <
        /div> <
        /div> <
        /div> <
        />
    )
}