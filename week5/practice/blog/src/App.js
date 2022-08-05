// import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import proImg from './newjeans.png';

function App() {
  /*
  const {post, changePost} = useState(["안암 맛집", "고른 햇살"]);
  changePost(["안암 맛집", "고른 햇살", "베나레스"]); // 아예 새로운 값이 들어가므로 처음부터 다 입력해줘야 함
  */
  const [postTitle, changePostTitle] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬독학"]);
  postTitle.sort();
  const [genderFlag, changeGenderFlag] = useState(true);

  const clickTitle = () => {
    window.location.href = 'http://localhost:3000/';
  }

  const clickFunc = (e) => {  // {
    // e.preventDefault();  // a 태그에만 적용
    let copy = [...postTitle];  // deep copy
    if (genderFlag)
      copy[0] = "여자 코트 추천";
    else
      copy[0] = "남자 코트 추천";
    changePostTitle(copy);
    changeGenderFlag(!genderFlag);
    // console.log(genderFlag);
  }

  const modifyTitle = (e, idx) => {
    let copy = [...postTitle];
    if (copy[idx] === "남자 코트 추천")
      copy[idx] = "남자 셔츠 추천";
    else if (copy[idx] === "강남 우동 맛집")
      copy[idx] = "안암 텐동 맛집";
    else if (copy[idx] === "파이썬독학")
      copy[idx] = "C++독학";
    changePostTitle(copy.sort());
  }
  
  return (
    <div className="container">
      <div className="topBar">
        <h2 className="title" onClick={clickTitle}>ReactBlog</h2>
        <svg className="searchIcon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
          <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/>
        </svg>
        <div className="profile">
          <img src={proImg} />
        </div>
      </div>
      <div className="post">
        <h3 className="postTitle">{postTitle[0]}</h3>
        <p>2월 17일 발행</p>
        <button onClick={clickFunc}>Click!</button>
        <br></br>
        <button onClick={(e)=>{modifyTitle(e, 0)}}>글 수정</button>
      </div>
      <hr className="underline" />
      <div className="post">
        <h3 className="postTitle">{postTitle[1]}</h3>
        <p>2월 17일 발행</p>
        <button onClick={(e)=>{modifyTitle(e, 1)}}>글 수정</button>
      </div>
      <hr className="underline" />
      <div className="post">
        <h3 className="postTitle">{postTitle[2]}</h3>
        <p>2월 17일 발행</p>
        <button onClick={(e)=>{modifyTitle(e, 2)}}>글 수정</button>
      </div>
      <hr className="underline" />
    </div>
  );
}

export default App;
