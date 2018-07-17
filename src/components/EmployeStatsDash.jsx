import React from "react";

const EmployeStatsDash = ({ employeData }) => {

    if (!employeData) {
        return <div>loading...</div>
    }
       
    let employeeMap = new Map();
    
    employeData.map((data)=>{
       
        let checkInDate = data.checkInDate;
        let checkOutDate = data.checkOutDate;
        //let diffDays = Math.round(Math.abs((checkInDate.getTime() - checkOutDate.getTime())/(oneDay)));
        //console.log(diffDays);
    });

    return (
        <div className="container">
          
        </div>
    )
}

export default EmployeStatsDash;