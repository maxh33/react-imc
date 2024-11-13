import React from 'react';
import styles from './Result.module.css';
import ResultMessage from '../ResultMessage/ResultMessage';


const Result = ({ imc }) => {
    return (
        <div className={styles.result}>
            <h2>Your IMC: {imc}</h2>
            <ResultMessage imc={imc} />
        </div>
    );
};

export default Result;