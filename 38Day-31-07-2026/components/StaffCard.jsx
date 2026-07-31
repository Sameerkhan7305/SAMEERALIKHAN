import { memo } from "react";

function StaffCard({

    staffId,

    fullName,

    designation,

    yearlyIncome

}) {

    console.log("Staff Card Render :", fullName);

    return (

        <div
            style={{
                border: "2px solid green",
                padding: "15px",
                marginBottom: "10px"
            }}
        >

            <h3>ID : {staffId}</h3>

            <h3>Name : {fullName}</h3>

            <h3>Role : {designation}</h3>

            <h3>Salary : ₹{yearlyIncome}</h3>

        </div>

    );

}

export default memo(StaffCard);