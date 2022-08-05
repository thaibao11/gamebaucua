import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

export default function DemoReduxChatApp(props) {
  //thay thế mapstatetoprops
  let comments = useSelector((state) => state.stateDefault.comments);
  let dispatch = useDispatch();
  let [userComment, setUserComment] = useState({
    name: "",
    content: "",
    avatar: "",
  });

  console.log(userComment);
  const getValue = (e) => {
    let { name, value } = e.target;
    setUserComment({
      ...userComment,
      [name]: value,
    });
  };

  const submitChat = (e) => {
    e.preventDefault();
    let action = {
      type: "chat",
      item: {
        ...userComment,
        avatar: `https://i.pravatar.cc/150?u=${userComment.name}`,
      },
    };
    dispatch(action);
  };
  return (
    <>
      <div className="container">
        <h3>Facebook App!</h3>
        <div className="card text-left">
          <div className="card-header">
            <div className="row">
              {comments.map((comment) => (
                <>
                  <div className="col-1">
                    <img
                      src={comment.avatar}
                      alt="img"
                      style={{ height: "60px" }}
                    />
                  </div>
                  <div className="col-11">
                    <h6 className="text-danger">{comment.name}</h6>
                    <p>{comment.content}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="card-body">
            <div className="form-group">
              <h4 className="card-title">Name</h4>
              <input
                className="form-control"
                name="name"
                onChange={(e) => getValue(e)}
              />
            </div>
            <div className="form-group">
              <h4 className="card-title">Content</h4>
              <input
                className="form-control"
                name="content"
                onChange={(e) => getValue(e)}
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-success"
                onClick={(e) => submitChat(e)}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     comments: state.stateDefault.comments,
//   };
// };

// export default connect(mapStateToProps)(DemoReduxChatApp);
