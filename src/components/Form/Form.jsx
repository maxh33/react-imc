import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import styles from './Form.module.css';

const Form = ({ calculateIMC }) => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        calculateIMC(weight, height);
    };
    // function to handle the weight input
    const handleWeightChange = (e) => {
        const value = e.target.value;
        if (parseInt(value, 10) <= 199) {
            setWeight(value);
        }
    };
    // function to handle the height input
    const handleHeightChange = (e) => {
        const value = e.target.value;
        if (parseFloat(value) <= 2.5) {
            setHeight(value);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
                <label htmlFor="weight">Weight (kg):</label>
                <InputMask
                    mask="999"
                    maskChar={null}
                    id="weight" 
                    placeholder='Ex: 50'
                    value={weight} 
                    onChange={handleWeightChange} 
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="height">Height (m):</label>
                <InputMask
                    mask="9.99"
                    maskChar={null} 
                    id="height"
                    placeholder='Only Numbers Ex: 170' 
                    value={height} 
                    onChange={handleHeightChange} 
                />
            </div>
            <button type="submit">Calculate BMI</button>
        </form>
    );
};

export default Form;