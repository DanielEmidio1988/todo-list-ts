import React from "react";
import style from "./Sorting.module.scss"

interface Props {
  sortTasks: (type: string) => void;
}

function Sorting({ sortTasks }: Props) {
  return (
    <div className={style.sorting}>
      <button onClick={() => sortTasks("asc")}>Ordem Alfabética (A-Z)</button>
      <button onClick={() => sortTasks("desc")}>Ordem Alfabética (Z-A)</button>
    </div>
  );
}

export default Sorting;
