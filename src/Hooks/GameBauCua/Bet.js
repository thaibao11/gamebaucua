import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Bet = () => {
  let modals = useSelector((state) => state.stateDice.modal_bet);

  let dispatch = useDispatch();
  return (
    <div className="row">
      {modals.map((modal, index) => {
        return (
          <>
            <div className="col-4 mb-5" key={index}>
              <div className="box_bet flex-column d-flex align-items-center">
                <img src={modal.image} alt="bet" />
                <div className="button_bet mt-2">
                  Cược{" "}
                  <i
                    className="fas fa-plus mr-2"
                    onClick={() => {
                      dispatch({
                        type: "DAT_CUOC",
                        item: modal,
                        increase: true,
                      });
                    }}
                  ></i>
                  <span>{modal.value_bet === 0 ? "0" : modal.value_bet}</span>
                  <i
                    className="fas fa-minus ml-2"
                    onClick={() => {
                      dispatch({
                        type: "DAT_CUOC",
                        item: modal,
                        increase: false,
                      });
                    }}
                  ></i>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Bet;
