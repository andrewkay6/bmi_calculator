import React from "react";
import { useState } from "react";
import { getHeightImperialFromMetric, getHeightMetricFromImperial, stringRoundTo } from "./ConversionUtilities";

const HeightInput = ({setHeightContents}) => {
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');
    const [cm, setCm] = useState('');

    const handleFeetChange = (event) => {
        let newFeet = event.target.value; 
        let newCm = getHeightMetricFromImperial(newFeet, inches);
        newCm = stringRoundTo(newCm, 2);
        setFeet(newFeet);
        setCm(newCm);
        setHeightContents({
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
        let newCm = getHeightMetricFromImperial(feet, newInches);
        newCm = stringRoundTo(newCm, 2);
        
        setInches(event.target.value);
        setCm(newCm);
        setHeightContents({
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
        let newFeetAndInches = getHeightImperialFromMetric(event.target.value);
        let newFeet = newFeetAndInches[0];
        let newInches = newFeetAndInches[1];
        newInches = stringRoundTo(newInches, 2);

        setCm(event.target.value);
        setInches(newInches);
        setFeet(newFeet);
        setHeightContents({
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