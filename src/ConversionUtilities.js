const getHeightMetricFromImperial = (feet, inches) => {
    let totalInches = (parseFloat(feet) * 12) + parseFloat(inches);
    let cm = totalInches * 2.54;

    if (isNaN(cm)) {
        return "";
    }
    return cm.toString();

}

const getHeightImperialFromMetric = (cm) => {
    let inches = parseFloat(cm) / 2.54;
    if (isNaN(inches)) {
        return ["", ""];
    }
    return [(Math.floor(inches / 12)).toString(), (inches % 12).toString()];
}


const getWeightImperialFromMetric = (kg) => {
    if (isNaN(parseFloat(kg))) {
        return "";
    }

    return parseFloat(kg) * 2.205;

}

const getWeightMetricFromImperial = (lbs) => {
    if (isNaN(parseFloat(lbs))) {
        return "";
    }

    return parseFloat(lbs) / 2.205;

}

const roundTo = (num, places) => {
    return Math.round(num * Math.pow(10, places)) / Math.pow(10, places);
}

const stringRoundTo = (num, places) => {
    let rounded = roundTo(num, places);
    if (isNaN(rounded)){
        return "";
    }
    return "" + rounded;
}



export { getHeightMetricFromImperial, getHeightImperialFromMetric, getWeightImperialFromMetric, getWeightMetricFromImperial, roundTo, stringRoundTo };