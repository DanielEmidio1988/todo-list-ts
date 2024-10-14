import React from "react";
import { ITask } from "../../types/task";
import style from "./Filters.module.scss"

interface Props {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

function Filters({ setFilter }: Props) {
  return (
    <div className={style.filters}>
      <button onClick={() => setFilter("all")}>Todas</button>
      <button onClick={() => setFilter("completed")}>Concluídas</button>
      <button onClick={() => setFilter("incomplete")}>Incompletas</button>
    </div>
  );
}

export default Filters;
