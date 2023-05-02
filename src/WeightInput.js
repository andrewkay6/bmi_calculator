import React from "react";
import { useState } from "react";

import { getWeightImperialFromMetric, getWeightMetricFromImperial, stringRoundTo } from "./ConversionUtilities";


const WeightInput = (props) => {
    const [kg, setKg] = useState('');
    const [lbs, setLbs] = useState('');
  
    const handleKgChange = (event) => {
      setKg(event.target.value);
      let newLbs = getWeightImperialFromMetric(event.target.value);
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
        <input type="text" placeholder="lbs" value={stringRoundTo(lbs,3)} onChange={handleLbsChange} /> 
        <input type="text" placeholder="kg" value={stringRoundTo(kg,3)} onChange={handleKgChange} />
      </>
    );

    
  }

export default WeightInput;