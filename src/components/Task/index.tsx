import React from "react";
import { ITask } from "../../types/task";
import { BsCheckCircle, BsPencilSquare, BsTrash } from 'react-icons/bs';
import style from "./Task.module.scss";

interface Props {
    task: ITask;
    deleteTask: (taskId: string) => void;
    editTask: (task: ITask) => void;
    toggleCompleteTask: (taskId: string) => void;
}

function Task({ task, deleteTask, editTask, toggleCompleteTask }: Props) {
    return (
        <li className={`${style.task} ${task.finish ? style.task_finish : ''}`}>
            <p className={`${style.task___description}`}>{task.description}</p>
            <span className={`${style.task___icons_area}`}>
            <BsCheckCircle
                onClick={() => toggleCompleteTask(task.id)}
                title="Concluir Tarefa"
                style={{ cursor: 'pointer', marginRight: '10px', color: task.finish ? 'white' : 'black' }}
                size={24} // Tamanho do ícone
            />
            
            <BsPencilSquare
                onClick={() => editTask(task)}
                title="Editar Tarefa"
                style={{ cursor: 'pointer', marginRight: '10px', color: 'black' }}
                size={24}
            />
            
            <BsTrash
                onClick={() => deleteTask(task.id)}
                title="Excluir Tarefa"
                style={{ cursor: 'pointer', marginRight: '10px', color: 'black' }}
                size={24}
            />
            </span>
            
        </li>
    );
}

export default Task