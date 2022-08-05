import React from "react";
import { useSelector } from "react-redux";
const ToTalBet = () => {
  let total = useSelector((state) => state.stateDice.total);
  return (
    <>
      <div className="col-12 text-center">
        <h3 className="text-danger text-center">Game Bầu cua</h3>

        <span className="total_bet">Tiền thưởng: {total}$</span>
      </div>
    </>
  );
};

export default ToTalBet;
