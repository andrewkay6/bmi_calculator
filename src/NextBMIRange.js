import React from "react";

const underweightKeyword = (
    <span className="underweightRow">underweight</span>
);

const normalWeightKeyword = (
    <span className="normalWeightRow">normal weight</span>
);

const overweightKeyword = (
    <span className="overweightRow">overweight</span>
);

const obeseKeyword = (
    <span className="obeseRow">obese</span>
);

const unknownKeyword = (
    <span style={{color: "grey"}}>unknown</span>
);

const weightCategories = {
    0: {
        "keyword": underweightKeyword,
        "maxValue" : 18.49,
        "minValue" : Number.MIN_SAFE_INTEGER
    },
    1: {
        "keyword": normalWeightKeyword,
        "maxValue" : 24.99,
        "minValue" : 18.5
    },
    2: {
        "keyword": overweightKeyword,
        "maxValue" : 29.99,
        "minValue" : 25
    },
    3: {
        "keyword": obeseKeyword,
        "maxValue" : Number.MAX_SAFE_INTEGER,
        "minValue" : 30
    },
    4: {
        "keyword": obeseKeyword,
        "maxValue" : null,
        "minValue" : null
    }
}


const bmiToNumericWeightCategory = (BMI) => {
    if (isNaN(BMI)) {
        return 4;
    }
    if (parseFloat(BMI) < 18.5) {
        return 0;
    }
    if (parseFloat(BMI) >= 18.5 && parseInt(BMI) < 25) {
        return 1;
    }
    if (parseFloat(BMI) >= 25 && parseInt(BMI) < 30) {
        return 2;
    }
    else {
        return 3;
    }
}

const bmiToWeight = (BMI, heightContents) => {
    let heightInMeters = parseFloat(heightContents['metricHeight']['cm']) / 100.0;
    let result = (parseFloat(BMI) * Math.pow(heightInMeters, 2));

    return Math.round(result * 100) / 100;

}

const getBMIDifferenceInKg = (greaterBMI, lesserBMI, heightContents) => {
    let greaterWeight = bmiToWeight(greaterBMI, heightContents);
    let lesserWeight = bmiToWeight(lesserBMI, heightContents);

    let weightDifference = greaterWeight - lesserWeight;

    return Math.round(weightDifference * 100)/100;
    
} 


const kgToLbs = (kg) => {
    let lbs = parseFloat(kg) * 2.205;
    let lbsRounded = Math.round(lbs * 100) / 100;
    return lbsRounded.toString();
}
const getLoseWeightTexts = (BMI, heightContents) =>{
    let numericWeightCategory = bmiToNumericWeightCategory(BMI);
    let weightCategoryBMIs = {};
    weightCategoryBMIs[numericWeightCategory] = BMI;
    let loseWeightTexts = []

    
    if (numericWeightCategory === 4){
        
        loseWeightTexts.push(<div key={0}>Your BMI is {unknownKeyword}. Please enter your height and weight to get more information.</div>);
        
    }
    else if (numericWeightCategory === 0){
        loseWeightTexts.push (<div key={0}>Your BMI is categorized as {underweightKeyword}. This is the lowest available weight category.</div>);   
    }
    else if (numericWeightCategory < 4) {
        for (let i = numericWeightCategory - 1; i >= 0; i --){
            let loseWeightKG = getBMIDifferenceInKg(BMI, weightCategories[i]["maxValue"], heightContents);
            let loseWeightLbs = kgToLbs(loseWeightKG);
            loseWeightTexts.push(
                <>
                <div key={i}>To be considered {weightCategories[i]["keyword"]} you would need to lose around {loseWeightKG} kg or {loseWeightLbs} lbs.</div><br/>
                </>
            );
        }
        
    }
    else {
        return (<div> error </div>);
    }

    return loseWeightTexts;

}

const getGainWeightTexts = (BMI, heightContents) => {
    let numericWeightCategory = bmiToNumericWeightCategory(BMI);
    let weightCategoryBMIs = {};
    weightCategoryBMIs[numericWeightCategory] = BMI;
    let gainWeightTexts = []

    if (numericWeightCategory === 4){
        
        gainWeightTexts.push(<div key={0}>Your BMI is {unknownKeyword}. Please enter your height and weight to get more information.</div>);
        
    }
    else if (numericWeightCategory === 3){
        gainWeightTexts.push (<div key={0}>Your BMI is categorized as {obeseKeyword}. This is the highest available weight category.</div>);   
    }

    else if (numericWeightCategory >= 0){
        for (let i = numericWeightCategory + 1; i < 4; i ++){
            let gainWeightKG = getBMIDifferenceInKg(weightCategories[i]["minValue"], BMI, heightContents);
            let gainWeightLbs = kgToLbs(gainWeightKG);
            gainWeightTexts.push(
                <>
                <div key={i}>To be considered {weightCategories[i]["keyword"]} you would need to gain around {gainWeightKG} kg or {gainWeightLbs} lbs.</div><br/>
                </>
            );
        }
    }



    return gainWeightTexts;
}
const NextBMIRange = (props) => {
    let heightContents = props.heightContents;
    let weightContents = props.weightContents;
    let BMI = parseFloat(props.calculateBMI(heightContents, weightContents));




    return (
        <div className="nextRanges">
            <div className="header">Trying to lose weight?</div>
            {getLoseWeightTexts(BMI, heightContents)}
            <div className="header">Trying to gain weight?</div>
            {getGainWeightTexts(BMI, heightContents)}
        </div>
    );
}

export default NextBMIRange;