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
    
   

    return (
      <>
        <input type="text" placeholder="lbs" value={lbs} onChange={handleLbsChange} /> 
        <input type="text" placeholder="kg" value={kg} onChange={handleKgChange} />
      </>
    );

    
  }

export default WeightInput;