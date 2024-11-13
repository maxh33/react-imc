import React, { useState } from 'react';
import styles from './Form.module.css';

const Form = ({ calculateIMC }) => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        calculateIMC(weight, height);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
                <label htmlFor="weight">Weight (kg):</label>
                <input 
                    type="number" 
                    id="weight" 
                    placeholder='Only numbers Ex: 50'
                    value={weight} 
                    onChange={(e) => setWeight(e.target.value)} 
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="height">Height (m):</label>
                <input 
                    type="number" 
                    id="height"
                    placeholder='Only Numbers Ex: 1.70' 
                    value={height} 
                    onChange={(e) => setHeight(e.target.value)} 
                />
            </div>
            <button type="submit">Calculate IMC</button>
        </form>
    );
};

export default Form;