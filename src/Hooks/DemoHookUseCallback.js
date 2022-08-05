import React, { useState, useCallback } from "react";
import ChildHookUseCallBack from "./ChildHookUseCallBack";
const DemoHookUseCallback = () => {
  let [like, setLike] = useState(1);

  return (
    <div className="m-5">
      Like: {like}
      <br />
      <i
        className="fas fa-heart"
        style={{ cursor: "pointer", color: "red", fontSize: "35px" }}
        onClick={() => setLike(like + 1)}
      ></i>
      <ChildHookUseCallBack />
    </div>
  );
};

export default DemoHookUseCallback;
