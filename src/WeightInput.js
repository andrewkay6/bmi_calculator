import React from "react";
import { useState } from "react";


const WeightInput = (props) => {
    const [kg, setKg] = useState('');
    const [lbs, setLbs] = useState('');
  
    const handleKgChange = (event) => {
      setKg(event.target.value);
      props.setWeightContents({
        imperialHeight: {
          lbs: lbs
        },
        metricWeight: {
          kg: event.target.value
        }
      });
    }
  
    const handleLbsChange = (event) => {
      setLbs(event.target.value);
      props.setWeightContents({
        imperialHeight: {
          lbs: event.target.value
        },
        metricWeight: {
          kg: kg
        }
      });
    }
    let inputField;
    switch (props.unit) {
      case 'imperial':
        inputField = (
          <div>
            <input type="text" value={lbs} onChange={handleLbsChange} />
          </div>
        )
        break;
  
      case 'metric':
        inputField = (
          <div>
            <input type="text" value={kg} onChange={handleKgChange} />
          </div>
        )
        break;
      default:
        inputField = (<div>test</div>);
        break;
  
    }
    return inputField;
  }

export default WeightInput;