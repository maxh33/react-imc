
import React, { useState } from 'react'
import styles from './App.module.css'
import Form from './components/Form/Form'
import Result from './components/Result/Result';

const App = () => {
    const [imc, setImc] = useState(null);
    const [error, setError] = useState('');

    const calculateIMC = (weight, height) => {
      if (height <= 0 || weight <= 0) {
        setError('Weight and height must be greater than 0');
        setImc(null);
        return;
      }
      const imcValue = (weight / (height * height)).toFixed(2);
      setImc(imcValue);
      setError('');
    };

  return (
    <div className={styles.app}>
      <h1>IMC/BMI Calculator</h1>
      <Form calculateIMC={calculateIMC} />
      {error && <div className={styles.error}>{error}</div>}
      {imc && <Result imc={imc} />}
    </div>
  )
}

export default App
