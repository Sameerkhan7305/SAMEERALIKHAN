function Example01_ListRendering() {

    const employeeNames = [

        "Sameer",

        "Rahul",

        "Aman",

        "Rohit",

        "Akash"

    ];

    return (

        <div>

            <h1>Employee List</h1>

            {

                employeeNames.map((fun)=>{

                    return(

                        <h2>{fun}</h2>

                    );

                })

            }

        </div>

    );

}

export default Example01_ListRendering;