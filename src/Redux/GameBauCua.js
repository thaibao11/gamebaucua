import Swal from "sweetalert2";
const stateDice = {
  dice: [
    { id: 1, name: "cua", image: "./img/BaiTapGameBauCua/cua.png" },
    { id: 2, name: "ca", image: "./img/BaiTapGameBauCua/ca.png" },
    { id: 3, name: "ga", image: "./img/BaiTapGameBauCua/ga.png" },
  ],
  total: 500,
  modal_bet: [
    {
      id: 1,
      name: "cua",
      image: "./img/BaiTapGameBauCua/cua.png",
      value_bet: 0,
    },
    { id: 2, name: "ca", image: "./img/BaiTapGameBauCua/ca.png", value_bet: 0 },
    { id: 3, name: "ga", image: "./img/BaiTapGameBauCua/ga.png", value_bet: 0 },
    {
      id: 4,
      name: "nai",
      image: "./img/BaiTapGameBauCua/nai.png",
      value_bet: 0,
    },
    {
      id: 5,
      name: "tom",
      image: "./img/BaiTapGameBauCua/tom.png",
      value_bet: 0,
    },
    {
      id: 6,
      name: "bau",
      image: "./img/BaiTapGameBauCua/bau.png",
      value_bet: 0,
    },
  ],
};

const GameBauCuaReducer = (state = stateDice, action) => {
  console.log(action);
  switch (action.type) {
    case "DAT_CUOC":
      {
        let modal = state.modal_bet.find((item) => item.id === action.item.id);
        if (modal) {
          if (action.increase && state.total > 0) {
            modal.value_bet += 50;
            state.total -= 50;
          } else if (action.increase && state.total === 0) {
            modal.value_bet = modal.value_bet;
            state.total = 0;
          } else {
            if (modal.value_bet > 0) {
              modal.value_bet -= 50;
              state.total += 50;
            }
          }
        }
        state.modal_bet = [...state.modal_bet];
        console.log(state.modal_bet);
      }
      break;

    case "DO_XUC_XAC":
      {
        const dice_random = [];
        for (let i = 0; i < state.dice.length; i++) {
          let random = Math.floor(Math.random() * 6);
          const modal_random = state.modal_bet[random];
          dice_random.push(modal_random);
        }
        state.dice = dice_random;

        console.log(action);
        dice_random.forEach((item) => {
          let index = state.modal_bet.findIndex(
            (modal) => modal.id === item.id
          );
          //nếu thắng cộng lại tiền tương ứng với số bầu cua nổ ra
          if (index !== -1) {
            console.log(state.modal_bet[index]);
            state.total += state.modal_bet[index].value_bet;
          }
        });

        //hoàn tiền
        state.modal_bet.forEach((modal) => {
          let dice = dice_random.find((dice) => dice.id === modal.id);
          if (dice) {
            state.total += modal.value_bet;
          }
        });

        //reset tiền đặt sau khi xóc xong
        state.modal_bet = state.modal_bet.map((modal) => {
          return { ...modal, value_bet: 0 };
        });
        console.log(state.modal_bet);
      }
      break;
    default:
      console.log("ok");
  }
  return { ...state };
};

export default GameBauCuaReducer;
