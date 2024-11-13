
import React, { useState } from 'react'
import styles from './App.module.css'
import Form from './components/Form/Form'

const App = () => {
    const [imc, setImc] = useState(null);

    const calculateIMC = (weight, height) => {
        const imcValue = (weight / (height * height)).toFixed(2);
        setImc(imcValue);
    };

  return (
    <div className={styles.app}>
      <h1>IMC Calculator</h1>
      <Form calculateIMC={calculateIMC} />
    </div>
  )
}

export default App
