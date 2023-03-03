import './App.css';
import { useState } from 'react';

import HeightInput from './HeightInput';
import WeightInput from './WeightInput';
import BMIRangeTable from './BMIRangeTable';


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
    return "purple";
  }

}

const kgToLbs = (kg) => {
  let lbs = parseFloat(kg) * 2.205;
  let lbsRounded = Math.round(lbs * 100) / 100;
  return lbsRounded.toString();
}

const lbsToKg = (lb) => {
  let kg = parseFloat(kg) * 2.205;
  let kgRounded = Math.round(kg * 100) / 100;
  return kgRounded.toString();
}
const getGreaterWeightCategoryValue = (heightContents, weightContents) => {
  let BMI = parseFloat(calculateBMI(heightContents, weightContents));
  let upperBMI = parseFloat(getUpperBMI(heightContents, weightContents));
  let weight = parseFloat(weightContents['metricWeight']['kg']);
  
  if (BMI > 30){
    return "-";
  }

  let upperWeight = bmiToWeight(upperBMI, heightContents, weightContents);
  return upperWeight - weight; 

  
}

const bmiToWeight = (BMI, heightContents, weightContents) => {
  let heightInMeters = parseFloat(heightContents['metricHeight']['cm']) / 100.0;
  let result = (parseFloat(BMI) * Math.pow(heightInMeters, 2));

  return Math.round(result * 100) / 100;
  
}
const getLesserWeightCategoryValue = (heightContents, weightContents) => {
  let BMI = parseFloat(calculateBMI(heightContents, weightContents));
  let lowerBMI = parseFloat(getLowerBMI(heightContents, weightContents));
  let weight = parseFloat(weightContents['metricWeight']['kg']);

  if (BMI < 18.5){
    return "-"
  }

  let lowerWeight = bmiToWeight(lowerBMI, heightContents, weightContents);
  return weight - lowerWeight;
}

const getUpperBMI = (heightContents, weightContents) => {
  let BMI = calculateBMI(heightContents, weightContents);

  if (BMI === "-") {
    return "-";
  }
  if (parseFloat(BMI) < 18.5) {
    return "18.5";
  }
  if (parseFloat(BMI) >= 18.5 && parseInt(BMI) < 25) {
    return "25";
  }
  if (parseFloat(BMI) >= 25 && parseInt(BMI) < 30) {
    return "30";
  }
  else {
    return BMI.toString();
  }

}

const getLowerBMI = (heightContents, weightContents) => {
  let BMI = calculateBMI(heightContents, weightContents);
  if (BMI === "-") {
    return "-";
  }
  if (parseFloat(BMI) < 18.5) {
    return BMI.toString();
  }
  if (parseFloat(BMI) >= 18.5 && parseInt(BMI) < 25) {
    return "18.49";
  }
  if (parseFloat(BMI) >= 25 && parseInt(BMI) < 30) {
    return "24.99";
  }
  else {
    return BMI.toString();
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
              <HeightInput heightContents={heightContents} setHeightContents={setHeightContents} />
            </div>
            <br />
            <label className="header">Weight</label>
            <div className='inputsContainer'>
              <WeightInput weightContents={weightContents} setWeightContents={setWeightContents} />
            </div>
          </div>

        </div>
        <BMIRangeTable />
      </div>
      <div className='resultContainer'>
        <label className='resultLabel'>Your BMI is: </label><br />
        <label className='resultLabel'>-{getLesserWeightCategoryValue(heightContents,weightContents)}kg</label>
        <label className='bmiResult'
          style={{ color: generateBMIColor(heightContents, weightContents) }}>
          {calculateBMI(heightContents, weightContents)}
        </label>
        <label className='resultLabel'> +{getGreaterWeightCategoryValue(heightContents,weightContents)}kg</label>
      </div>
    </div>
  );
}

export default App;