import { useCallback, useMemo, useState } from "react";

import StaffCard from "./components/StaffCard";

function DashboardView() {

    const [clickCount, setClickCount] = useState(0);

    const officeMembers = [

        {
            staffId: 101,
            fullName: "Rahul",
            designation: "React Developer",
            yearlyIncome: 50000
        },

        {
            staffId: 102,
            fullName: "Sana",
            designation: "Node Developer",
            yearlyIncome: 65000
        },

        {
            staffId: 103,
            fullName: "Arjun",
            designation: "UI Designer",
            yearlyIncome: 45000
        }

    ];

    const totalIncome = useMemo(() => {

        console.log("Calculating Total Salary");

        return officeMembers.reduce(

            (sum, person) => sum + person.yearlyIncome,

            0

        );

    }, []);

    const increaseCounter = useCallback(() => {

        setClickCount((previousValue) => previousValue + 1);

    }, []);

    return (

        <>

            <h1>Company Dashboard</h1>

            <h2>Button Clicks : {clickCount}</h2>

            <button onClick={increaseCounter}>

                Increase

            </button>

            <h2>Total Salary : ₹{totalIncome}</h2>

            {

                officeMembers.map((person) => (

                    <StaffCard

                        key={person.staffId}

                        staffId={person.staffId}

                        fullName={person.fullName}

                        designation={person.designation}

                        yearlyIncome={person.yearlyIncome}

                    />

                ))

            }

        </>

    );

}

export default DashboardView;