import React from "react";

const BMIRangeTable = () => {

    return (
        <div className="tableContainer">
            <div className="tableTitle">Reference Ranges</div>
            <table className="bmiRangeTable">
                <tbody>
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
                </tbody>
            </table>

        </div>
    );
}

export default BMIRangeTable;