import React from 'react';
import './taskTab.css';

function TaskTab({ selectedTab, setSelectedTab }) {
    return (
        <div className="task-tab">
            <button onClick={() => setSelectedTab('upcoming')} className={selectedTab === 'upcoming' ? 'active' : ''}>
                Upcoming Tasks
            </button>
            <button onClick={() => setSelectedTab('overdue')} className={selectedTab === 'overdue' ? 'active' : ''}>
                Overdue Tasks
            </button>
            <button onClick={() => setSelectedTab('completed')} className={selectedTab === 'completed' ? 'active' : ''}>
                Completed Tasks
            </button>
        </div>
    );
}

export default TaskTab;