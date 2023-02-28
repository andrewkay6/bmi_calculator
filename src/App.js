import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import HeightInput from './HeightInput';




const WeightInput = (props) => {

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

  return (
    <div>
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
      <label>BMI Calculator</label> <br></br>
      <HeightInput unit={heightUnits} heightContents={heightContents} setHeightContents={setHeightContents} />
      <textarea value ="Weight" rows ={1} cols = {4}/><br></br>
      <label>Your BMI is:</label>
      <label>{heightContents['imperialHeight']['feet']}</label>
    </div>
  );
}

export default App;