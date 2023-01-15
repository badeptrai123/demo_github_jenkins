import React from "react";

const Cell = (progs) => {
  const { index, onClick, value } = progs;
  const handleClick = (index) => {
    onClick(index);
  };
 
  return (
    <div
      onClick={() => {
        handleClick(index);
      }}
      className={`cell ${value==="X"?"is-x":value==="O"?"is-o":""}`}
    >
      {value}
    </div>
  );
};

export default Cell;
