import './App.css';
import { useState } from 'react';

import HeightInput from './HeightInput';
import WeightInput from './WeightInput';
import BMIRangeTable from './BMIRangeTable';
import NextBMIRange from './NextBMIRange';
import BMIResultContainer from './BMIResultContainer';


const generateBMIColor = (heightContents, weightContents) => {
  let BMI = calculateBMI(heightContents, weightContents);

  if (BMI === "-") {
    return "grey";
  }
  if (parseInt(BMI) < 18.5) {
    return "yellow";
  }
  if (parseInt(BMI) >= 18.5 && parseInt(BMI) < 25) {
    return "green";
  }
  if (parseInt(BMI) >= 25 && parseInt(BMI) < 30) {
    return "red";
  }
  else {
    return "magenta";
  }

}

const calculateBMI = (heightContents, weightContents) => {
  let heightInMeters = parseFloat(heightContents['metricHeight']['cm']) / 100.0;
  let weightInKg = parseFloat(weightContents['metricWeight']['kg']);
  let result = weightInKg / Math.pow(heightInMeters, 2);
  let resultRounded = Math.round(result * 100) / 100;

  if (isNaN(resultRounded)) {
    return "-";
  }

  return resultRounded;
}
const App = () => {
  const [heightContents, setHeightContents] = useState({
    imperialHeight: {
      feet: '',
      inches: ''
    },
    metricHeight: {
      cm: ''
    }
  });
  const [weightContents, setWeightContents] = useState({
    imperialWeight: {
      lbs: ''
    },
    metricWeight: {
      kg: ''
    }
  });

  return (
    <div className='page'>
      <div className='titleContainer'>
        <div className='title'>What's my BMI?</div>
      </div>
      <div className='app'>

        <div className='appLogic'>
          <div className='unitSelection'>
            <label className="header">Height</label>
            <div className='inputsContainer'>
              <HeightInput 
              heightContents={heightContents} 
              setHeightContents={setHeightContents} 
              />
            </div>
            <br />
            <label className="header">Weight</label>
            <div className='inputsContainer'>
              <WeightInput 
              weightContents={weightContents} 
              setWeightContents={setWeightContents} 
              />
            </div>
          </div>

        </div>
        <BMIRangeTable />
        <NextBMIRange
        heightContents = {heightContents}
        weightContents = {weightContents}
        calculateBMI = {calculateBMI}
        />
      </div>
      <BMIResultContainer 
      BMI={calculateBMI(heightContents, weightContents)} 
      bmiColor={generateBMIColor(heightContents, weightContents)}
      />
      
      
    </div>
  );
}

export default App;