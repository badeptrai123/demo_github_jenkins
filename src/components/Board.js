import React from "react";
import Cell from "./Cell";

const Board = (progs) => {
  const {cells,onClick}=progs;

  return (
    <div className="board">
      {
        cells.map((item,index) => (
          <Cell key={index} onClick={onClick} index={index} value={item}/>
        ))}
    </div>
  );
};

export default Board;
