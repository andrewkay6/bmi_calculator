import React from "react";
import { useState } from "react";

const getImperialFromMetric = (kg) => {
  if (isNaN(parseFloat(kg))){
    return "";
  }
  
  return parseFloat(kg) * 2.205;

}

const getMetricFromImperial = (lbs) => {
  if (isNaN(parseFloat(lbs))){
    return "";
  }

  return parseFloat(lbs) / 2.205;

}


const WeightInput = (props) => {
    const [kg, setKg] = useState('');
    const [lbs, setLbs] = useState('');
  
    const handleKgChange = (event) => {
      setKg(event.target.value);
      let newLbs = getImperialFromMetric(event.target.value);
      setLbs(newLbs);
      props.setWeightContents({
        imperialHeight: {
          lbs: newLbs
        },
        metricWeight: {
          kg: event.target.value
        }
      });
    }
  
    const handleLbsChange = (event) => {
      setLbs(event.target.value);
      let newKg = getMetricFromImperial(event.target.value);
      setKg(newKg);
      props.setWeightContents({
        imperialHeight: {
          lbs: event.target.value
        },
        metricWeight: {
          kg: newKg
        }
      });
    }
    let inputField;
    switch (props.unit) {
      case 'imperial':
        inputField = (
          <>
            <input type="text" value={lbs} onChange={handleLbsChange} />lbs
          </>
        )
        break;
  
      case 'metric':
        inputField = (
          <>
            <input type="text" value={kg} onChange={handleKgChange} />kg
          </>
        )
        break;
      default:
        inputField = (<div>test</div>);
        break;
  
    }
    return inputField;
  }

export default WeightInput;