import React from "react";


const BMIRangeTable = () => {

    return (
        <div className="tableContainer">
        <div className="tableTitle">Reference Information</div>
        <table className="bmiRangeTable">
            <tr>
                <th>BMI Range</th>
                <th>Category</th>
            </tr>
            <tr className="underweightRow">
                <td>Less than 18.5</td>
                <td>Underweight</td>
            </tr>
            <tr className="normalWeightRow">
                <td>18.5 to 24.9</td>
                <td>Normal weight</td>
            </tr>
            <tr className="overweightRow">
                <td>25 to 29.9</td>
                <td>Overweight</td>
            </tr>
            <tr className="obeseRow">
                <td>30 or greater</td>
                <td>Obese</td>
            </tr>
        </table>
        <div className="disclaimerBody">
        Body Mass Index (BMI) is a person's weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness. BMI screens for weight categories that may lead to health problems, but it does not diagnose the body fatness or health of an individual.
        </div>
        <div className="disclaimerSource">Taken from: </div>
        <a href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html">CDC.gov 'Body Mass Index (BMI)'</a>
    </div> 
    );
}

export default BMIRangeTable;