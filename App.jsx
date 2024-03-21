import React, { useState } from 'react';
import './App.css';


function IMC (){
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);
  const [classification, setClassification] = useState(null);

  const calculateIMC = () => {
    const heightMeters = height / 100; //dividindo por 100 o resultado fica em metros
    const imc = weight / ( heightMeters* heightMeters); //calculo do imc

    setResult(imc.toFixed(2)) // toFixed(2) diminui as casas decimais para duas.

    //classificação do imc
    if (imc < 18.5) {
      setClassification('Abaixo do peso ideal');
    } else if (imc >= 18.5 && imc <= 24.9){
      setClassification('Peso saudável 👍')
    } else if (imc >= 25 && imc <= 29.9){
      setClassification('Sobrepeso 👎')
    } else if (imc >= 30 && imc <= 34.9){
      setClassification('Obesidade Grau 1')
    } else if (imc >= 35 && imc <= 39.9){
      setClassification('Obesidade Grau 2')
    } else if (imc >= 40){
      setClassification('Obesidade Mórbida')
    } else {
      setClassification(null);
    }

  };

      return (
        <div className = "App">
          <h1>Calculadora de IMC</h1>
          <div className = "input-container">
            

            <label className="label">
              Peso (Kg);
            </label>

            <input
            type="number"
            className="input-field"
            value = {weight}
            onChange = {(e) => setWeight (e.target.value)}
            />
          </div>

          <div className="input-container">
            <label className="label">
              Altura(cm)
            </label>

            <input
            type="number"
            className="input-field"
            value = {height}
            onChange = {(e) => setHeight (e.target.value)}
            />
          </div>

          <button
          className="calculate-button"
          onClick = {calculateIMC}
          >
            Calcular IMC
          </button>

          {result &&
          <p className='result'> Seu IMC é: {result}</p>
          }

        {classification &&
        <p className='classsification'> Classificação:  {classification}</p>
        }
        </div>
      )
  }

  export default IMC;


