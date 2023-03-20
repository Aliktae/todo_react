import React, {ChangeEvent, useState} from "react";

export interface ITask{
    id:number,
    taskName:string,
    isCompleted:boolean;
}

interface Props {
    task: ITask;
    completeTask(id:number): void;
    deleteTask(id:number):void;
    todoList: ITask[];
}

const TodoTask = ({ task, completeTask,deleteTask, todoList }: Props) => {
    const [editing,setEditing] = useState(false);
    const [upd,setUpd] = useState<string>("");

    const handleEditing = (): void => {
        setUpd(task.taskName);
        setEditing(true);
    }
    const handleUpd = (event:ChangeEvent<HTMLInputElement>):void =>{
        setEditing(true);
        if (event.target.name === "upd") {
            setUpd(event.target.value);
        }
    }

    const saveUpdate = (updatedTask:string,id:number) => {
        todoList.filter((task) => {
            if (task.id == id) {
                task.taskName = updatedTask
                return setUpd(task.taskName)
            }
        })
    }

    const editMode = {
        display: editing ? "flex" : "none"
    }

    const completeStyle = {
        display: editing ? "none" : "flex",
        color: task.isCompleted ? "#949494":"black",
        fontStyle: task.isCompleted ? "italic":"none",
        textDecoration: task.isCompleted ? "line-through" : "none"
    };

    const hiddenMode = {
        display: editing ? "none":"flex",
    }
    return (
            <div className="content" >
                <p style={completeStyle}>{task.taskName}</p>
                <input type="text" name="upd" value={upd} className="taskEdit" style={editMode} onChange={handleUpd}/>
                <button style={hiddenMode} onClick={handleEditing}>Edit</button>
                <button style={editMode} onClick={() => {saveUpdate(upd,task.id);setEditing(false)}}>Save</button>
                <button onDoubleClick={() => {deleteTask(task.id)}} onClick={() => {completeTask(task.id);}} >X</button>
            </div>
    );
};

export default TodoTask;