import React from "react";
import { useState } from "react";

const getMetricFromImperial = (feet, inches) => {
    let totalInches = (parseFloat(feet) * 12) + parseFloat(inches);
    let cm = totalInches * 2.54;

    if (isNaN(cm)){
        return "";
    }
    return cm.toString();

}

const getImperialFromMetric = (cm) => {
    let inches = parseFloat(cm)/2.54;
    if (isNaN(inches)){
        return ["",""];
    }
    return [(Math.floor(inches/12)).toString(), (inches%12).toString()];
}

const HeightInput = (props) => {
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');
    const [cm, setCm] = useState('');

    const handleFeetChange = (event) => {
        let newFeet = event.target.value; 
        let newCm = getMetricFromImperial(newFeet, inches); 
        setFeet(newFeet);
        setCm(newCm);
        props.setHeightContents({
            imperialHeight: {
                feet: newFeet,
                inches: inches
            },
            metricHeight: {
                cm: newCm
            }
        });
    };

    const handleInchesChange = (event) => {
        let newInches = event.target.value;
        let newCm = getMetricFromImperial(feet, newInches);
        
        setInches(event.target.value);
        setCm(newCm);
        props.setHeightContents({
            imperialHeight: {
                feet: feet,
                inches: event.target.value
            },
            metricHeight: {
                cm: newCm
            }
        });
    };
    const handleCmChange = (event) => {
        let newFeetAndInches = getImperialFromMetric(event.target.value);
        let newFeet = newFeetAndInches[0];
        let newInches = newFeetAndInches[1];
        setCm(event.target.value);
        setInches(newInches);
        setFeet(newFeet);
        props.setHeightContents({
            imperialHeight: {
                feet: newFeet,
                inches: newInches
            },
            metricHeight: {
                cm: event.target.value
            }
        });
    };

    return (
        <>
            <input type="text" className="halfTextInput" placeholder="ft" value={feet} onChange={handleFeetChange} /> 
            <input type="text" className="halfTextInput" placeholder='in' value={inches} onChange={handleInchesChange} />
            
            <input type="text" placeholder='cm' value={cm} onChange={handleCmChange} />
        </>
    );

};

export default HeightInput;