import PermMediaTwoToneIcon from '@mui/icons-material/PermMediaTwoTone';
import {AiFillTag} from "react-icons/ai"
import {FaLocationArrow} from "react-icons/fa"
import {MdOutlineEmojiEmotions} from "react-icons/md"
import {GoFileMedia} from "react-icons/go"
import {useState,useContext,useRef} from "react";
import {AuthContext} from "../context/AuthContext"
import axios from "axios";


export default function Share() {
        const PF = process.env.REACT_APP_PUBLIC_FOLDER;
        const {user} = useContext(AuthContext);
        const [file,setFile] = useState(null);
        const desc = useRef();

       const handleSubmit = async (e) =>{
            e.preventDefault();
            const newPost = {//we will send this post to the api call 
                userId:user._id,
                desc:desc.current.value,
            };
            if(file){
                const data =new  FormData();
                const fileName = `${Date.now()}_${file.name}`;//to have name uniquely for every user who upload;
                data.append("file",file);
                data.append("name",fileName);
                newPost.img = fileName;//adds the image with customised name
            
         try{

             const res = axios.post("/upload",data)
            console.log("res is in uploading the image ",res)
            }catch(err){
             console.log("error in share",err);
         }
            }
             try{//this call is post add to the database
                await axios.post("/post",newPost)
             }catch(err){
                 console.log(err);
             }

        }
    return (
        <div className='share w-full h-[170px] rounded-[10px] shadow-lg  bg-white '>

            <div className="shareWrapper p-3">
         {/* image and share something as text */}
                <div className="shareTop flex items-center ">
                    <img src={ PF+user.profilePicture  ||  PF+"person/noAvatar.jpg"}
                        alt='topImage'
                        className='w-[50px] h-[50px] rounded-[50%] object-cover mr-[10px] '
                    ></img>
                    <input
                        type='text'
                        placeholder={"what is in your mind "+user.name+"?"}
                        ref = {desc}
                        className='shareInput w-[80%] focus:outline-none '
                    />
                </div>

                <hr className="shareHr m-[20px]" />
                
                <form onSubmit={handleSubmit} className="shareButton mx-[25px] ">
                    <div className="shareOptions flex justify-evenly">
                        <label htmlFor="file" className="shareOPtion cursor-pointer flex items-center">
                            <GoFileMedia 
                            className='shareIcon mr-[3px] text-xl text-red-500'/>
                            <span className='shareOptionText'>Photo or Video</span>
                            <input 
                            className="hidden"
                            id='file'
                            type="file" 
                            accept=".jpeg,.jpg,.png" 
                            onChange={(e)=>setFile(e.target.files[0])}
                            
                             />
                           
                        </label>
                        <div className="shareOPtion cursor-pointer flex items-center">
                            <AiFillTag style={{ color: 'blue' }} className='shareIcon mr-[3px] text-[16px] ' />
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className="shareOPtion cursor-pointer flex items-center">
                            <FaLocationArrow style={{ color: 'green' }} 
                            className='shareIcon mr-[3px] text-[14px] ' />
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className="shareOPtion cursor-pointer flex items-center">
                            <MdOutlineEmojiEmotions 
                             className='shareIcon mr-[3px] text-[16px] text-yellow-500' />
                            <span className='shareOptionText '>Feelings</span>
                        </div>
                         <button type="submit"
                         className='shareButton outline-none border-none bg-green-600
                          font-[500] mr-[20px] cursor-pointer text-white px-[5px] py-[3px] rounded-md '>
                          Share
                          </button> 
                    </div>
                   
                </form>
            </div>

        </div>
    )
}
