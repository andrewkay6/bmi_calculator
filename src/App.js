import './App.css';
import { useState } from 'react';

import HeightInput from './HeightInput';
import WeightInput from './WeightInput';
import BMIRangeTable from './BMIRangeTable';


const generateBMIColor = (heightContents, weightContents) => {
  let BMI = calculateBMI(heightContents, weightContents);

  if (BMI === "-"){
    return "grey";
  }
  if (parseInt(BMI) < 18.5){
    return "yellow";
  }
  if (parseInt(BMI) >= 18.5 && parseInt(BMI) < 25){
    return "green";
  }
  if (parseInt(BMI)>= 25 && parseInt(BMI)< 30){
    return "red";
  }
  else{
    return "purple";
  }

  }


const calculateBMI = (heightContents, weightContents) => {
  let heightInMeters = parseInt(heightContents['metricHeight']['cm']) / 100.0;
  let weightInKg = parseInt(weightContents['metricWeight']['kg']);
  let result = weightInKg / Math.pow(heightInMeters, 2);
  let resultRounded = Math.round(result * 100) / 100;

  if (isNaN(resultRounded)) {
    return "-";
  }

  return resultRounded;
}
const App = () => {
  const [heightUnits, setHeightUnits] = useState('metric');
  const [heightContents, setHeightContents] = useState({
    imperialHeight: {
      feet: '',
      inches: ''
    },
    metricHeight: {
      cm: ''
    }
  });
  const [weightUnits, setWeightUnits] = useState('metric');
  const [weightContents, setWeightContents] = useState({
    imperialWeight: {
      lbs: ''
    },
    metricWeight: {
      kg: ''
    }
  });


  const handleHeightUnitChange = (event) => {
    setHeightUnits(event.target.value);
  }
  const handleWeightUnitChange = (event) => {
    setWeightUnits(event.target.value);
  }
  return (
    <div className='page'>
      <div className='titleContainer'>
        <div className='title'>What's my BMI?</div>
      </div>
      <div className='app'>

        <div className='appLogic'>
          <div className='unitSelection'>
          <label className="header">Height</label>
          <div className='unitsContainer'>
            <input
              type="radio"
              id="metricHeight"
              name="heightoption"
              value="metric"
              checked={heightUnits === 'metric'}
              onChange={handleHeightUnitChange}
            />
            <label htmlFor="metricHeight">Metric</label>
            <input
              type="radio"
              id="imperialHeight"
              name="heightoption"
              value="imperial"
              checked={heightUnits === 'imperial'}
              onChange={handleHeightUnitChange}
            />
            <label htmlFor="imperialHeight">Imperial</label>
          </div>
          <br></br>
          <label className="header">Weight</label>
          <div className='unitsContainer'>
            <input
              type="radio"
              id="metricWeight"
              name="weightoption"
              value="metric"
              checked={weightUnits === 'metric'}
              onChange={handleWeightUnitChange}
            />
            <label htmlFor="metricWeight">Metric</label>
            <input
              type="radio"
              id="imperialWeight"
              name="weightoption"
              value="imperial"
              checked={weightUnits === 'imperial'}
              onChange={handleWeightUnitChange}
            />
            <label htmlFor="imperialWeight">Imperial</label>
            </div>
          </div>
          <div className='totalInputsContainer'>
          <div className='inputsContainer'>
            <HeightInput unit={heightUnits} heightContents={heightContents} setHeightContents={setHeightContents} />
          </div>
          <br />
          <div className='inputsContainer'>
            <WeightInput unit={weightUnits} weightContents={weightContents} setWeightContents={setWeightContents} />
          </div>
          </div>
        </div>
        <BMIRangeTable />
      </div>
      <div className='resultContainer'>
        <label className='resultLabel'>Your BMI is: </label><br />
        <label className='bmiResult'
          style={{ color: generateBMIColor(heightContents, weightContents) }}>
          {calculateBMI(heightContents, weightContents)}
        </label>
      </div>
    </div>
  );
}

export default App;