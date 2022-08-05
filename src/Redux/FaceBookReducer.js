const stateDefault = {
  comments: [
    { name: "yone", content: "hi", avatar: `https://i.pravatar.cc/150?u=yone` },
    {
      name: "yasuo",
      content: "hhello",
      avatar: `https://i.pravatar.cc/150?u=yasuo`,
    },
  ],
};

const FaceBookReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "chat":
      {
        state.comments = [...state.comments, { ...action.item }];
        state.comments = [...state.comments];
      }
      console.log(state.comments);
  }
  return { ...state };
};

export default FaceBookReducer;
