import React, { memo } from "react";

const ChildHookUseCallBack = () => {
  let name = "tothaibao";
  let object = { id: "1", name: "asd" };
  console.log(name);
  console.log(object);
  return (
    <div>
      <textarea></textarea>
      <br />
      <button className="btn btn-success">send</button>
    </div>
  );
};

export default memo(ChildHookUseCallBack);
