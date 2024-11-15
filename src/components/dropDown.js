import React, { useState } from 'react';
import './dropDown.css'; 

function Dropdown({ onSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('all'); 

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option) => {
        setSelectedOption(option); 
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <button onClick={handleToggle} className="dropdown-button">
                Filter
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <div 
                        onClick={() => handleSelect('all')} 
                        className={selectedOption === 'all' ? 'selected' : ''}
                    >
                        All
                    </div>
                    <div 
                        onClick={() => handleSelect('high')} 
                        className={selectedOption === 'high' ? 'selected' : ''}
                    >
                        High Priority
                    </div>
                    <div 
                        onClick={() => handleSelect('medium')} 
                        className={selectedOption === 'medium' ? 'selected' : ''}
                    >
                        Medium Priority
                    </div>
                    <div 
                        onClick={() => handleSelect('low')} 
                        className={selectedOption === 'low' ? 'selected' : ''}
                    >
                        Low Priority
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dropdown;