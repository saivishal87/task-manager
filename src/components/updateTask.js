// UpdateTask.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './createTask.css';

function UpdateTask({ tasks, updateTask }) {
    const { taskId } = useParams(); 
    const navigate = useNavigate();

 
    const [task, setTask] = useState({
        title: '',
        description: '',
        dueDate: '',
        dueTime: '',
        priority: 'Low'
    });

  
    useEffect(() => {
        const taskToUpdate = tasks.find(task => task.id === parseInt(taskId));
        if (!taskToUpdate) {  
            navigate('/'); 
        } else {
            setTask(taskToUpdate); 
        }
    }, [taskId, tasks, navigate]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

 
    const handleSubmit = (e) => {
        e.preventDefault(); 

     
        updateTask(task);

       
        navigate('/');
    };

    return (
        <div className="create-task">
            <h2>Update Task</h2>
            <form onSubmit={handleSubmit} className="task-form">
                <label>
                    Title
                    <input
                        type="text"
                        name="title"
                        value={task.title}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Description
                    <textarea
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                        rows="4"
                    />
                </label>
                <label>
                    Due Date
                    <input
                        type="date"
                        name="dueDate"
                        value={task.dueDate}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Due Time
                    <input
                        type="time"
                        name="dueTime"
                        value={task.dueTime}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Priority Level
                    <select
                        name="priority"
                        value={task.priority}
                        onChange={handleChange}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </label>
                <button type="submit" className="create-button">Update Task</button>
            </form>
        </div>
    );
}

export default UpdateTask;