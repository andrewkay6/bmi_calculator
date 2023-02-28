import React from "react";
import { useState } from "react";

const getMetricFromImperial = (feet, inches) => {
    let totalInches = (parseInt(feet) * 12) + parseInt(inches);
    let cm = totalInches * 2.54;
    return cm;

}

const getImperialFromMetric = (cm) => {
    let inches = cm/2.54;
    return [Math.floor(inches/12), inches%12];
}

const HeightInput = (props) => {
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');
    const [cm, setCm] = useState('');

    const handleFeetChange = (event) => {
        let newCm = getMetricFromImperial(event.target.value, inches);
        setFeet(event.target.value);
        setCm(newCm);
        props.setHeightContents({
            imperialHeight: {
                feet: event.target.value,
                inches: inches
            },
            metricHeight: {
                cm: newCm
            }
        });
    };

    const handleInchesChange = (event) => {
        setInches(event.target.value);
        let newCm = getMetricFromImperial(feet, event.target.value);
        console.log(newCm)
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
        setCm(event.target.value);
        let newFeetAndInches = getImperialFromMetric(event.target.value);
        let newFeet = newFeetAndInches[0];
        let newInches = newFeetAndInches[1];
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

    let inputField;
    switch (props.unit) {
        case 'imperial':
            inputField = (
                <div>
                    <input type="text" value={feet} onChange={handleFeetChange} />
                    <input type="text" value={inches} onChange={handleInchesChange} />
                </div>
            );
            break;
        case 'metric':
            inputField = (
                <input type="text" value={cm} onChange={handleCmChange} />
            );
            break;
        default:
            inputField = (<div />);
            break;
    }

    return inputField;
};

export default HeightInput;