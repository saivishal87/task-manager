import React from 'react';
import './taskCard.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

function TaskCard({ task, deleteTask, markAsCompleted }) {
    const navigate = useNavigate();

    const priorityClass = task.priority === 'High' ? 'priority-high' : 
                          task.priority === 'Medium' ? 'priority-medium' : 
                          'priority-low';

    const handleUpdateClick = () => {
        navigate(`/update-task/${task.id}`);
    };

    const handleDeleteClick = () => {
        deleteTask(task.id);
    };

    const handleCompleteClick = () => {
        markAsCompleted(task.id); 
    };

    return (
        <div className="task-card">
            {/* Corrected the syntax for the priority dot */}
            {/* <div className={`priority-dot ${priorityClass}`} /> */}

            <h3>{task.title}</h3>
            <p className="description">{task.description}</p>
            <p className="due-date-time">
                <span className="due-date-label">Due Date:</span> {task.dueDate} 
                <span className="due-time"> at {task.dueTime}</span>
            </p>

            {/* Corrected the syntax for the priority class */}
            <p className={`priority ${priorityClass}`}>Priority: {task.priority}</p>

            <div className="task-actions">
                <button onClick={handleUpdateClick} className="update-button">Update</button>

                {task.status !== 'completed' && (
                    <button onClick={handleCompleteClick} className="submit-button">
                        Set as Done
                    </button>
                )}

                <button onClick={handleDeleteClick} className="delete-button">Delete</button>
            </div>
        </div>
    );
}

export default TaskCard;
