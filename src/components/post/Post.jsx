import { MoreVert } from "@mui/icons-material"
import { useState, useEffect } from "react"
import axios from "axios"
import { format } from "timeago.js";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"

export default function Post({ post }) {


    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(true);
    const [user, setUser] = useState({});
    const { user: currentUser } = useContext(AuthContext);
    
    useEffect(() => {
        // console.log("this is post");
        const fetchUser = async () => {
            try {
                //console.log(post.userId)
                const res = await axios.get(`/users/?userId=${post.userId}`);
                //console.log("res",res.data)
                setUser(res.data); // Assuming your posts are in the response data
                //console.log("user",user.name)
            } catch (error) {
                console.error("Error fetching in posts  ", error);
            }
        };
        fetchUser();
    }, [post.userId]);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    function clickHandler() {
        try {
            const res = axios.put("/post/" + post._id + "/like", { userId: currentUser._id })
            
        } catch (err) {
            console.log("error in liking");


        }
        setIsLiked(!isLiked);
        isLiked ? setLike(like + 1) : setLike(like - 1);

    }
    const navigate = useNavigate()

    function onclick() {
        navigate(`/profile/${user.name}`);
    }
    return (
        <div className='post w-full rounded-sm shadow-lg my-[20px] '>
     <div className="postWrapper p-[10px]">
        <div className="postTop flex justify-between items-center">
            <div className="postTopLeft flex items-center">
{/*                <Link to={`profile/${user.name}`}>
*/}                <img 
                    src={ PF+user.profilePicture 
                    || 
                    PF+"person/noAvatar.jpg"}
                    alt='postProfile' 
                className='cursor-pointer w-[32px] h-[32px] rounded-[50%] object-cover '></img>
                {/*</Link>*/}
                <span className='text-[15px]  mx-[10px] font-semibold'>
                    {user.name}
                </span>
                <span className='text-[12px]'>{user.data}</span>
                <span>{format(post.createdAt)}</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter my-[20px] w-full max-h-[500px] object-cover  ">
            <span className="postText">{post.desc}</span>
            <img className='postImg' src={PF+post.img || PF+"person/noAvatar.jpg"} alt='postImage'></img>
        </div>
        <div className="postBottom flex items-center justify-between  ">
            <div className="postBottomLeft flex items-center">
                <img className='likeIcon w-5 h-5 mr-[5px] cursor-pointer'
                 onClick={clickHandler} src={`${PF}like.png`} />

                <img className=' w-5 h-5 mr-[5px] cursor-pointer' 
                 onClick={clickHandler} 
                src={`${PF}heart.png`} alt='heart'></img>
                <span>You and {like} more...</span>
            </div>
            <div className="postBottomRight">
                <span className='postCommentText text-[15px] cursor-pointer border-b-2 border-gray-400 border-dashed '>
                 {post.comment} comments</span>
            </div>
        </div>
     </div>
    </div>
    )
}