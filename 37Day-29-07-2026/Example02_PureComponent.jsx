import React from "react";

class EmployeeCard extends React.PureComponent {

    render() {

        console.log("Employee Card Render");

        return (

            <div
                style={{
                    border: "2px solid blue",
                    padding: "20px",
                    marginTop: "20px"
                }}
            >

                <h2>Employee Card</h2>

                <p>Name : {this.props.employeeName}</p>

                <p>Department : {this.props.department}</p>

            </div>

        );

    }

}

class Example02_PureComponent extends React.Component {

    state = {

        counterValue: 0,

        employeeName: "Sameer",

        department: "React"

    };

    render() {

        return (

            <div>

                <h1>PureComponent Example</h1>

                <h2>Counter : {this.state.counterValue}</h2>

                <button
                    onClick={() =>
                        this.setState({
                            counterValue: this.state.counterValue + 1
                        })
                    }
                >
                    Increase Counter
                </button>

                <EmployeeCard

                    employeeName={this.state.employeeName}

                    department={this.state.department}

                />

            </div>

        );

    }

}

export default Example02_PureComponent;