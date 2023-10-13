import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"
export default function Rightbar({user}) {


    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
     const HomeRightbar = () =>{


       return( <>
              <div className="birthdayContainer flex items-center ">
                    <img className="w-[30px] h-[30px]" src="/assets/gift.png" alt=""></img>         
                     <span 
                     className='birthdayText text-[14px] ml-2'>
                     <b>Pola Foster </b>
                     and 
                     <b> 3 others Friends </b> 
                     have birthday today
                     </span>
               </div>

      
           {/*Add Container*/}
{/*
           <div className="relative mt-5">
               <span 
               className='absolute p-1 rounded-tl-2xl text-2xl bg-gray-400 z-10 border-solid border-black border-[2px] top-0 left-0'
               >ad</span>
                     <img 
                   src="https://images.pexels.com/photos/210126/pexels-photo-210126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="advertiseImage"
                    className="rounded-2xl"
                    />
                      <span 
                      className="absolute bottom-10 right-0 text-white font-bold  text-6xl italic">
                      CocaCola
                      </span>
           </div>
           */}
           {/*Online Friends List*/}

           <h4 className="rightbarTitle mb-5 font-bold mt-5">Online Friennds</h4>
           <ul className="rightbarFriendList m-0 p-0 list-none">
           {
            Users.map((u) =>(
                <Online key={u.id} User={u} />
                ))
           }
           </ul>
           
        </>
     )}

     const ProfileRightBar=()=>{
        return(
            <>
                <h4 className="userbarTitle ">user Information</h4>
                <div className="rightbarInfo mb-[30px]">
                    <div className="rightbarInfoItem mb-[10px]">
                        <span className="rightbarInfoKey font-semibold mr-[15px] text-[#555]">City</span>
                        <span className="rightbarInfovalue font-light">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey font-semibold mr-[15px] text-[#555]">From</span>
                        <span className="rightbarInfovalue font-light">{user.from}</span>
                    </div> 
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey font-semibold mr-[15px] text-[#555]">Relationship</span>
                        <span className="rightbarInfovalue font-light">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}</span>
                    </div>
                    {/******************************user friends************************************
                    */}
                    <h4 className="rightbarTitle font-[18px] font-semibold mb-2 " >User friends</h4>
                    <div className="rightbarFollowings grid grid-cols-3 flex flex-wrap justify-between">
                        <div className="rightbarFollowing flex flex-col mb-[20px] cursor-pointer">
                            <img src={`${PF}person/10.jpeg`}
                            className="rightbarFollowingImg w-[100px] h-[100px] "
                             alt=""/>
                             <span className="rightbarFollowingName ">Stephen</span>
                        </div>
                        <div className="rightbarFollowing flex flex-col items-center mb-[20px] cursor-pointer">
                            <img src={`${PF}person/9.jpeg`}
                            className="rightbarFollowingImg w-[100px] h-[100px] "
                             alt=""/>
                             <span className="rightbarFollowingName">Stephen</span>
                        </div>
                        <div className="rightbarFollowing flex flex-col mb-[20px] cursor-pointer">
                            <img src={`${PF}person/8.jpeg`}
                            className="rightbarFollowingImg w-[100px] h-[100px] "
                             alt=""/>
                             <span className="rightbarFollowingName">Stephen</span>
                        </div>
                        <div className="rightbarFollowing flex flex-col mb-[20px] cursor-pointer">
                            <img src={`${PF}person/7.jpeg`}
                            className="rightbarFollowingImg w-[100px] h-[100px] "
                             alt=""/>
                             <span className="rightbarFollowingName">Stephen</span>
                        </div>
                        <div className="rightbarFollowing flex flex-col mb-[20px] cursor-pointer">
                            <img src={`${PF}person/6.jpeg`}
                            className="rightbarFollowingImg w-[100px] h-[100px] "
                             alt=""/>
                             <span className="rightbarFollowingName">Stephen</span>
                        </div>
                        <div className="rightbarFollowing flex flex-col mb-[20px] cursor-pointer">
                            <img src={`${PF}person/5.jpeg`}
                            className="rightbarFollowingImg w-[100px] h-[100px] "
                             alt=""/>
                             <span className="rightbarFollowingName">Stephen</span>
                        </div>



                    </div>
                </div>
            </>
            )
     }
    return (
    <div className="rightbar px-5 ">
        <div className="rightbarWrapper pt-2 pr-2">
           {user ? <ProfileRightBar/> : <HomeRightbar/>}
         </div>
    </div>
    )
}