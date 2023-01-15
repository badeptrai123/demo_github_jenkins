// import React from "react";
// import Board from "./Board";
// import "../game.css";
// import { useState } from "react";
// import calToWin from "../helper";
// const Game = () => {
//   //   const [board, setBoard] = useState(Array(9).fill(null));
//   const [state, setState] = useState({
//     board: Array(9).fill(null),
//     xIsNext: true,
//   });
//   //   const [xIsNext, setXIsNext] = useState(true);
//   const winner = calToWin(state.board);
//   const handleClick = (index) => {
//     const boardCopy = [...state.board];
//     if (winner !== null || state.board[index] != null) return;
//     boardCopy[index] = state.xIsNext === true ? "X" : "O";

//     // setBoard(boardCopy);
//     // setXIsNext(!xIsNext);
//     setState({
//       board: boardCopy,
//       xIsNext: !state.xIsNext,
//     });
//   };
//   const handleReset = () => {
//     // setBoard(Array(9).fill(null));
//     // setXIsNext(true);
//     setState({
//       board: Array(9).fill(null),
//       xIsNext: true,
//     });
//   };
//   const checkAllClick = () => {
//     let count = 0;
//     state.board.forEach((element) => {
//       if (element === "X" || element === "O") {
//         count++;
//       }
//     });
//     if (count === 9) {
//       return true;
//     }
//     return false;
//   };
//   return (
//     <div className="game">
//       <Board cells={state.board} onClick={handleClick} />
//       {winner !== null ? (
//         <span className="result">Winner is {winner}</span>
//       ) : checkAllClick() === true ? (
//         <span className="result">Draw</span>
//       ) : (
//         ""
//       )}

//       <button onClick={handleReset} className="reset">
//         Reset game
//       </button>
//     </div>
//   );
// };

// export default Game;

// use Reducer

import React from "react";
import Board from "./Board";
import "../game.css";
import { useReducer } from "react";
import calToWin from "../helper";

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};
const GameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner !== null || board[index] != null) return state;
      const stateNext={...state}
      stateNext.board[index] = xIsNext === true ? "X" : "O";
      stateNext.xIsNext = !xIsNext;
      return stateNext;
    }
    case "RESET": {
      // const stateNext = JSON.parse(JSON.stringify(state));
      const stateNext={...state}
      stateNext.board = Array(9).fill(null);
      stateNext.xIsNext = true;
      return stateNext;
    }
    default:
      break;
  }
};

const Game = () => {
  const [state, dispatch] = useReducer(GameReducer, initialState);
  console.log(state)
  const winner = calToWin(state.board);
  const handleClick = (index) => {
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
  };
  const handleReset = () => {
    dispatch({
      type: "RESET",
    });
  };
  const checkAllClick = () => {
    let count = 0;
    state.board.forEach((element) => {
      if (element === "X" || element === "O") {
        count++;
      }
    });
    if (count === 9) {
      return true;
    }
    return false;
  };
  return (
    <div className="game">
      <Board cells={state.board} onClick={handleClick} />
      {winner !== null ? (
        <span className="result">Winner is {winner}</span>
      ) : checkAllClick() === true ? (
        <span className="result">Draw</span>
      ) : (
        ""
      )}

      <button onClick={handleReset} className="reset">
        Làm mới game
      </button>
    </div>
  );
};

export default Game;
