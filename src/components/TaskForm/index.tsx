import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import { ITask } from "../../types/task";
import style from "./TaskForm.module.scss"

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  editingTask: ITask | null;
  updateTask: (task: ITask) => void;
}

function TaskForm({ setTasks, editingTask, updateTask }: Props) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ITask>();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editingTask) {
      setIsEditing(true);
      reset(editingTask);
    } else {
      setIsEditing(false);
      reset(); 
    }
  }, [editingTask, reset]);

  const onSubmit: SubmitHandler<ITask> = (data) => {
    if (isEditing && editingTask) {
      
      const updatedTask: ITask = {
        ...editingTask,
        description: data.description,
      };
      updateTask(updatedTask);
    } else {
      const newTask: ITask = {
        ...data,
        finish: false,
        id: uuidv4(),
        selected: false
      };
      setTasks(prevTasks => [...prevTasks, newTask]);
    }
    reset();
  };

  return (
    <form className={`${style.taskform}`} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="task">Tarefa</label>
      <input
        type="text"
        id="task"
        {...register("description", { required: "Favor, informar a descrição da tarefa" })}
      />
      {errors.description && <p>{errors.description.message}</p>}
      <input type="submit" value={isEditing ? "Atualizar Tarefa" : "Adicionar Tarefa"} />
    </form>
  );
}

export default TaskForm;
