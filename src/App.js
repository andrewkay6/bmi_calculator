import './App.css';
import { useState } from 'react';

import BMIRangeTable from './BMIRangeTable';
import NextBMIRange from './NextBMIRange';
import BMIResultContainer from './BMIResultContainer';
import InputLogic from './InputLogic';
import Title from './Title';

const generateBMIColor = (heightContents, weightContents) => {
  let BMI = calculateBMI(heightContents, weightContents);

  if (BMI === "-") {
    return "grey";
  }
  if (parseFloat(BMI) < 18.5) {
    return "yellow";
  }
  if (parseFloat(BMI) >= 18.5 && parseFloat(BMI) < 25) {
    return "green";
  }
  if (parseFloat(BMI) >= 25 && parseFloat(BMI) < 30) {
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
      <Title />
      <div className='app'>
        <InputLogic
          heightContents={heightContents}
          setHeightContents={setHeightContents}
          weightContents={weightContents}
          setWeightContents={setWeightContents}
        />
        <BMIRangeTable />
        <NextBMIRange
          heightContents={heightContents}
          weightContents={weightContents}
          calculateBMI={calculateBMI}
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