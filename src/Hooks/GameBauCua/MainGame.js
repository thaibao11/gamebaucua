import React from "react";
import ToTalBet from "./ToTalBet";
import Bet from "./Bet";
import RollDice from "./RollDice";
import "./GameBauCua.css";
const MainGame = () => {
  return (
    <>
      <div className="container-fluid p-0 game_bau_cua">
        <div className="row">
          <ToTalBet />
        </div>
        <div className="row mt-5">
          <div className="col-8">
            <Bet />
          </div>
          <div className="col-4 text-center">
            <RollDice />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainGame;
