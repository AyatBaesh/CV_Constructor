import React from 'react';
import styles from '../styles/Button.module.css'; 

const Button = ({ type, onClick }) => {
    let buttonText = '';
    let buttonStyle = '';

    if (type === 'delete') {
        buttonText = 'Delete';
        buttonStyle = styles.deleteButton; 
    } else if (type === 'save') {
        buttonText = 'Save';
        buttonStyle = styles.saveButton; 
    }

    return (
        <button className={buttonStyle} onClick={onClick}>
            {buttonText}
        </button>
    );
};

export default Button;