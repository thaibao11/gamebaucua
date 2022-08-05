import React from "react";
import { useSelector, useDispatch } from "react-redux";
const RollDice = () => {
  const dices = useSelector((state) => state.stateDice.dice);
  const dispatch = useDispatch();
  return (
    <>
      <div className="box_roll">
        {dices.map((dice) => {
          return (
            <>
              <img src={dice.image} alt="bet" />
            </>
          );
        })}
      </div>
      <button
        className="btn btn-success"
        onClick={() => {
          dispatch({
            type: "DO_XUC_XAC",
          });
        }}
      >
        Xốc
      </button>
    </>
  );
};

export default RollDice;
