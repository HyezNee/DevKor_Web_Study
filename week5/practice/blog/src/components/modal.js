const Modal = (props) => {
    return (
        <div className="modal">
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세내용</p>
          <button onClick={() => {
            let tmp = [...props.postTitle];
            tmp[0] = "여자 코트 추천";
            props.changePostTitle(tmp);
          }}>글 수정</button>
        </div>
    );
}

export {Modal};