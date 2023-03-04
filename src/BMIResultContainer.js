import { React } from "react";

const BMIResultContainer = (props) => {
    
    return (
        <div className='resultContainer'>
        <label className='resultLabel'>Your BMI is: </label><br />
        <label className='bmiResult'
          style={{ color: props.bmiColor }}>
          {props.BMI}
        </label>
      </div>
    );
}

export default BMIResultContainer;