import "./feed.css";
import Post from "../post/Post";
import Share from "../share/Share";
import { Users } from "../../dummyData";
import { useState, useEffect } from "react";
import axios from "axios";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext"

export default function Feed({name}) {
  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    // console.log("this is feed");
    const fetchPosts = async () => {
      try {
      
       const res = name ?
      await axios.get("/post/profile/"+name)
      :
      await axios.get("/post/timeline/"+ user._id)
      

      setPosts(res.data); 

      // Assuming your posts are in the response data
      } catch (error) {
        console.error("Error fetching posts from data:", error);
      }
    };
    fetchPosts();
  }, [name,user._id]); // You should pass an empty dependency array to useEffect to avoid infinite calls.

  return (
    <div className="feed overflow-y-scroll">
      <div className="m-5">
        <Share />
       {/* {
          posts.forEach((p) => {
             console.log("array",p[0].userId);
           // <Post post={p} key={p.id}/>
            })
        }*/}
        {posts.map((p) => 
          // console.log("objects",p)
           <Post post={p}  key={p._id} />)
      }
      </div>
    </div>
  );
}
