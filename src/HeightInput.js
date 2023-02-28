import React from "react";
import { useState } from "react";

const HeightInput = (props) => {
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');
    const [cm, setCm] = useState('');

    const handleFeetChange = (event) => {
        setFeet(event.target.value);
        props.setHeightContents({
            imperialHeight: {
                feet: event.target.value,
                inches: inches
            },
            metricHeight: {
                cm: cm
            }
        });
    };

    const handleInchesChange = (event) => {
        setInches(event.target.value);
        props.setHeightContents({
            imperialHeight: {
                feet: feet,
                inches: event.target.value
            },
            metricHeight: {
                cm: cm
            }
        });
    };
    const handleCmChange = (event) => {
        setCm(event.target.value);
        props.setHeightContents({
            imperialHeight: {
                feet: feet,
                inches: inches
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