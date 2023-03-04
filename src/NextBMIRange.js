import React from "react";


const calculateBMI = () => {

}

let BMI = "-";

const getGreaterWeightCategoryValue = (heightContents, weightContents, calculateBMI) => {
    let BMI = parseFloat(calculateBMI(heightContents, weightContents, calculateBMI));
    let upperBMI = parseFloat(getUpperBMI(heightContents, weightContents, calculateBMI));
    let weight = parseFloat(weightContents['metricWeight']['kg']);
    
    if (BMI > 30){
      return "-";
    }
  
    let upperWeight = bmiToWeight(upperBMI, heightContents, weightContents);
    return upperWeight - weight; 
  
    
  }
  
  const bmiToWeight = (BMI, heightContents) => {
    let heightInMeters = parseFloat(heightContents['metricHeight']['cm']) / 100.0;
    let result = (parseFloat(BMI) * Math.pow(heightInMeters, 2));
  
    return Math.round(result * 100) / 100;
    
  }
  const getLesserWeightCategoryValue = (heightContents, weightContents, calculateBMI) => {
    let BMI = parseFloat(calculateBMI(heightContents, weightContents));
    let lowerBMI = parseFloat(getLowerBMI(heightContents, weightContents));
    let weight = parseFloat(weightContents['metricWeight']['kg']);
  
    if (BMI < 18.5){
      return "-"
    }
  
    let lowerWeight = bmiToWeight(lowerBMI, heightContents, weightContents);
    return weight - lowerWeight;
  }
  
  const getUpperBMI = (heightContents, weightContents, calculateBMI) => {
    let BMI = calculateBMI(heightContents, weightContents);
  
    if (BMI === "-") {
      return "-";
    }
    if (parseFloat(BMI) < 18.5) {
      return "18.5";
    }
    if (parseFloat(BMI) >= 18.5 && parseInt(BMI) < 25) {
      return "25";
    }
    if (parseFloat(BMI) >= 25 && parseInt(BMI) < 30) {
      return "30";
    }
    else {
      return BMI.toString();
    }
  
  }
  
  const getLowerBMI = (heightContents, weightContents, calculateBMI) => {
    let BMI = calculateBMI(heightContents, weightContents);
    if (BMI === "-") {
      return "-";
    }
    if (parseFloat(BMI) < 18.5) {
      return BMI.toString();
    }
    if (parseFloat(BMI) >= 18.5 && parseInt(BMI) < 25) {
      return "18.49";
    }
    if (parseFloat(BMI) >= 25 && parseInt(BMI) < 30) {
      return "24.99";
    }
    else {
      return BMI.toString();
    }
  }

const kgToLbs = (kg) => {
    let lbs = parseFloat(kg) * 2.205;
    let lbsRounded = Math.round(lbs * 100) / 100;
    return lbsRounded.toString();
  }
  
  const lbsToKg = (lb) => {
    let kg = parseFloat(kg) * 2.205;
    let kgRounded = Math.round(kg * 100) / 100;
    return kgRounded.toString();
  }

const NextBMIRange = (props) => {
    BMI = props.calculateBMI(props.heightContents, props.weightContents);

    let returnValue = (<>test</>); 
    
    return returnValue;
}

export default NextBMIRange;