import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import TodoTask from "./components/TodoTasks";
import { ITask } from "./components/TodoTasks";

const App: FC = () => {
    const [task, setTask] = useState<string>("");
    const [todoList, setTodoList] = useState<ITask[]>([]);

    const setUpdate = (updatedTask:string,id:number) => {
        setTodoList(
            todoList.filter((task) => {
                if(task.id == id) {
                    return task.taskName = updatedTask
                }
            })
        )
    }
    const handleUpdate = (event:ChangeEvent<HTMLInputElement>):void =>{
        if (event.target.name === "upd") {
            setTask(event.target.value);
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value);
        }}

    const addTask = (): void => {
        const newTask = { id: Date.now(),taskName: task, isCompleted:false};
        setTodoList([...todoList, newTask]);
        setTask("");
    };

    const completeTask = (id: number) => {
        setTodoList(
            todoList.map((task) => {
                if (task.id === id){
                    return{...task,isCompleted:true};

                }
                return task;
            })
        )
    };

    const deleteTask = (taskToDeleteID:number) => {
        setTodoList(
            todoList.filter((task) => {
                return task.id !== taskToDeleteID;
            })
        )
    };

    const hiddenList = {
        display: todoList.length !== 0 ? "flex" : "none"
    }

    return (
        <div className="App">
            <h1 className="header">todoist</h1>
            <div className="taskInput">
                <h3>Create a task:</h3>
                <div className="inputBox">
                <input type="text" placeholder="Task..." name="task" value={task} onChange={handleChange}/>
                <button onClick={addTask}>Add Task</button>
                </div>
            </div>
            <div className="todoList" style={hiddenList}>
            {todoList.map((task: ITask,id:number) => {
                    return <TodoTask key={id} task={task} completeTask={completeTask} deleteTask={deleteTask}/>;
                })}
            </div>
        </div>
    );
};

export default App;