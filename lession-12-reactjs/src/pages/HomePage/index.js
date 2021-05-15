import React,{useState, useEffect} from "react";
import { v4 as uuidv4 } from "uuid";

import "./style.css";
import UserFunctionalComponent from "../../components/UserFunctionalComponent";
import UserClassComponent from "../../components/UserClassComponent";
import CountClassComponent from "../../components/CountClassComponent";
import CountFuncComponent from "../../components/CountFuncComponent";
import ClockClassComponent from "../../components/ClockClassComponent";
import ClockFuncComponent from "../../components/ClockFuncComponent";
import ClockClassCountDownToZero from "../../components/ClockClassCountDownToZero";
import ClockFuncCountDownToZero from "../../components/ClockFuncCountDownToZero";
import PostClassComponent from "../../components/PostClassComponent";
import PostFuncComponent from "../../components/PostFuncComponent";

const postList = [
  {
    id: uuidv4(),
    author: "Giang",
    content: "Sao cung duoc :v",
    isClicked: false,
  },
  {
    id: uuidv4(),
    author: "Khải",
    content: "Vẻ bề ngoài quan trọng đến thế à, còn ví anh thì sao... dỗi",
    isClicked: false,
  },
  {
    id: uuidv4(),
    author: "Tiên",
    content: "Hôm nay ăn mì",
    isClicked: false,
  },
];

// PostClassComponent
// class HomePage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: postList,
//     };
//   }
//   handleClickPost = (postId) => {
//     const newPosts = this.state.posts.map((post) => {
//       if (post.id === postId) return { ...post, isClicked: !post.isClicked };
//       return post;
//     });

//     this.setState({ posts: newPosts });
//   };

//   render() {
//     return (
//       <div className="home-page">
//         {/* <UserFunctionalComponent name='Hieu' age={18} gender='male' /> */}
//         {/* <UserClassComponent name='Khoa' age={25} gender="male" /> */}
//         {/* <CountClassComponent /> */}
//         {/* <CountFuncComponent /> */}
//         {/* <ClockClassComponent /> */}
//         {/* <ClockFuncComponent /> */}
//         {/* <ClockClassCountDownToZero /> */}
//         {/* < ClockFuncCountDownToZero /> */}
//         {this.state.posts.map((post) => (
//           <PostClassComponent
//             key={post.id}
//             postInfo={post}
//             onClickPost={this.handleClickPost}
//           />
//         ))}
        
//       </div>
//     );
//   }
// }

//PostFuncComponent
function HomePage(){
  const [posts,setNewPost] = useState(postList)

   const handleClickPost = (postId) => {
  //   const newPosts = posts.map(post => {
  //     if (post.id === postId) {
  //       return {...post,isClicked:!post.isClicked}
  //     }
  //     return post
  //   })
  //   setNewPost(newPosts)

    setNewPost(posts=>posts.map(post => {
      if(post.id === postId) {
        return {...post,isClicked:!post.isClicked}
      }
      return post
    }))
  }

  return (
    <div className="home-page">
      {posts.map((post) => (
      <PostFuncComponent
        key={post.id}
        postInfo={post}
        onClickPost={handleClickPost}
      />
    ))}
    </div>
  )
}

export default HomePage;
