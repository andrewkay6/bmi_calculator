
import HeightInput from './HeightInput';
import WeightInput from './WeightInput';

const InputLogic = ({heightContents, setHeightContents, weightContents, setWeightContents}) => {
    return (
        <div className='appLogic'>
          <div className='unitSelection'>
            <label className="header">Height</label>
            <div className='inputsContainer'>
              <HeightInput
                heightContents={heightContents}
                setHeightContents={setHeightContents}
              />
            </div>
            <br />
            <label className="header">Weight</label>
            <div className='inputsContainer'>
              <WeightInput
                weightContents={weightContents}
                setWeightContents={setWeightContents}
              />
            </div>
          </div>

        </div>
    );

}

export default InputLogic;