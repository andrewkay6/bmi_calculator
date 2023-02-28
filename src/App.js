import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import HeightInput from './HeightInput';
import WeightInput from './WeightInput';


const calculateBMI = (heightContents, weightContents) => {
  let heightInMeters = parseInt(heightContents['metricHeight']['cm']) / 100.0;
  let weightInKg = parseInt(weightContents['metricWeight']['kg']);

  return weightInKg / Math.pow(heightInMeters, 2)
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
    <div>
      <label>Height</label><br/>

      
      <input
        type="radio"
        id="metric"
        name="heightoption"
        value="metric"
        checked={heightUnits === 'metric'}
        onChange={handleHeightUnitChange}
      />
      <label htmlFor="metric">Metric</label><br></br>
      <input
        type="radio"
        id="imperial"
        name="heightoption"
        value="imperial"
        checked={heightUnits === 'imperial'}
        onChange={handleHeightUnitChange}
      />
      <label htmlFor="imperial">Imperial</label><br></br>
      <label>Weight</label><br/>
      <input
        type="radio"
        id="metric"
        name="weightoption"
        value="metric"
        checked={weightUnits === 'metric'}
        onChange={handleWeightUnitChange}
      />
      <label htmlFor="metric">Metric</label><br></br>
      <input
        type="radio"
        id="imperial"
        name="weightoption"
        value="imperial"
        checked={weightUnits === 'imperial'}
        onChange={handleWeightUnitChange}
      />
      
      <label htmlFor="imperial">Imperial</label><br></br>
      <label>BMI Calculator</label> <br></br>
      <HeightInput unit={heightUnits} heightContents={heightContents} setHeightContents={setHeightContents} />
      <WeightInput unit={weightUnits} weightContents={weightContents} setWeightContents={setWeightContents} />
      <label>Your BMI is: {calculateBMI(heightContents, weightContents)}</label>
      <label></label>
    </div>
  );
}

export default App;