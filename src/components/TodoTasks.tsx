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
}

const TodoTask = ({ task, completeTask,deleteTask }: Props) => {
    const [editing,setEditing] = useState(false);

    const handleEditing = () => {
        setEditing(true);
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
    return (
            <div className="content" >
                <p style={completeStyle}>{task.taskName}</p>
                <input type="text" name="upd" value={task.taskName} className="taskEdit" style={editMode}/>
                <button onClick={() => {handleEditing()}}>Edit</button>
                <button onDoubleClick={() => {deleteTask(task.id)}} onClick={() => {completeTask(task.id);}} >X</button>
            </div>
    );
};

export default TodoTask;