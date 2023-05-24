import React from "react";
import { useState } from "react";

import { getWeightImperialFromMetric, getWeightMetricFromImperial, stringRoundTo } from "./ConversionUtilities";


const WeightInput = (props) => {
    const [kg, setKg] = useState('');
    const [lbs, setLbs] = useState('');
  
    const handleKgChange = (event) => {
      setKg(event.target.value);
      let newLbs = getWeightImperialFromMetric(event.target.value);
      newLbs = stringRoundTo(newLbs, 2);
      setLbs(newLbs);
      props.setWeightContents({
        imperialWeight: {
          lbs: newLbs
        },
        metricWeight: {
          kg: event.target.value
        }
      });
    }
  
    const handleLbsChange = (event) => {
      setLbs(event.target.value);
      let newKg = getWeightMetricFromImperial(event.target.value);
      newKg = stringRoundTo(newKg, 2);
      setKg(newKg);
      props.setWeightContents({
        imperialWeight: {
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