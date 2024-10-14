import React from "react";
import Task from "../Task";
import { ITask } from "../../types/task";
import style from "./TaskList.module.scss"

interface Props {
    tasks: ITask[];
    deleteTask: (taskId: string) => void;
    editTask: (task: ITask) => void;
    toggleCompleteTask: (taskId: string) => void;
}

function TaskList({ tasks, deleteTask, editTask, toggleCompleteTask }: Props) {
    return (
        <aside className={style.tasklist}>
            <h3 className={style.tasklist___title}>Lista de tarefas:</h3>
            <ul className={style.tasklist___list}>
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                            deleteTask={deleteTask}
                            editTask={editTask}
                            toggleCompleteTask={toggleCompleteTask}
                        />
                    ))
                ) : (
                    <p>Nenhuma tarefa encontrada</p>
                )}
            </ul>
        </aside>
    );
}

export default TaskList