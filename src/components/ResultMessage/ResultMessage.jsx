import React from 'react';
import styles from './ResultMessage.module.css';

const ResultMessage = ({ imc }) => {
    let message = '';
    let colorClass = '';

    if (imc > 40.0) {
        message = 'Obesity Grade III: The signal is red, with a high probability of very serious associated illnesses. Treatment should be even more urgent.';
        colorClass = styles.red;
    } else if (imc >= 35.0 && imc <= 39.9) {
        message = 'Obesity Grade II: Even if your tests appear normal, it\'s time to take care of yourself by making lifestyle changes with close support from healthcare professionals.';
        colorClass = styles.orange;
    } else if (imc >= 30.0 && imc <= 34.9) {
        message = 'Obesity Grade I: Warning sign! It’s time to take care of yourself, even if your tests are normal. Let’s start making changes today! Pay attention to your diet. You need to start seeing a nutritionist and/or endocrinologist.';
        colorClass = styles.purple;
    } else if (imc >= 25.0 && imc <= 29.9) {
        message = 'Overweight: This is actually a pre-obesity stage, and many people in this range already have associated conditions, such as diabetes and hypertension. It’s important to review habits and seek help before, for a variety of reasons, entering the full obesity range.';
        colorClass = styles.darkgreen;
    } else if (imc >= 18.6 && imc <= 24.9) {
        message = 'Normal: Great, you are at a normal weight! The best way to stay this way is by maintaining an active lifestyle and a balanced diet.';
        colorClass = styles.green;
    } else {
        message = 'Below Normal: Consult a doctor. Some people have low weight due to their body’s characteristics, and that’s fine. Others may be facing issues such as malnutrition. It’s essential to determine which is the case.';
        colorClass = styles.blue;
    }

    return (
        <div className={`${styles.resultMessage} ${colorClass}`}>
            <p>{message}</p>
        </div>
    );
};

export default ResultMessage;