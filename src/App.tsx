import React, {useState, useEffect} from 'react';
import { ITask, IStateInitial } from './types/task';
import './assets/scss/styled.scss';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList/TaskList';
import Filters from './components/Filters';
import Sorting from './components/Sorting';

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [editingTask, setEditingTask] = useState<ITask | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [sortedTasks, setSortedTasks] = useState<ITask[]>([]);

  useEffect(() => {

    const mockTasks: ITask[] = [
      { id: '1', description: 'Tarefa 1', selected: false, finish: false },
      { id: '2', description: 'Tarefa 2', selected: false, finish: true },
      { id: '3', description: 'Tarefa 3', selected: false, finish: false }
    ];
    setTasks(mockTasks);
  }, []);

  function deleteTask(taskId: string) {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  }

  function editTask(task: ITask) {
    setEditingTask(task);
  }

  function updateTask(updatedTask: ITask) {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditingTask(null); 
  }

  function toggleCompleteTask(taskId: string) {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, finish: !task.finish } : task
      )
    );
  }

  function applyFilter(tasks: ITask[], filter: string) {
    if (filter === "completed") {
      return tasks.filter(task => task.finish);
    } else if (filter === "incomplete") {
      return tasks.filter(task => !task.finish);
    }
    return tasks;
  }

  function sortTasks(type: string) {
    const sorted = [...tasks].sort((a, b) => {
      if (type === "asc") {
        return a.description.localeCompare(b.description);
      } else {
        return b.description.localeCompare(a.description);
      }
    });
    setSortedTasks(sorted);
  }

  useEffect(() => {
    const filteredTasks = applyFilter(tasks, filter);
    setSortedTasks(filteredTasks);
  }, [tasks, filter]);

  return (
    <main className={`container`}>
      <TaskForm setTasks={setTasks} editingTask={editingTask} updateTask={updateTask} />
      <Filters setFilter={setFilter} />
      <Sorting sortTasks={sortTasks} />
      <TaskList 
        tasks={sortedTasks} 
        deleteTask={deleteTask} 
        editTask={editTask} 
        toggleCompleteTask={toggleCompleteTask} 
      />
    </main>
  );
}

export default App;
