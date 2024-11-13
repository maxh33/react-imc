import React from 'react';
import styles from './Result.module.css';


const Result = ({ imc }) => {
    return (
        <div className={styles.result}>
            <h2>Your IMC: {imc}</h2>
        </div>
    );
};

export default Result;