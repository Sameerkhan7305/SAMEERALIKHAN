function ChildStudent(props){
    function sendStudentName(){
        props.onSendName("sameer")
    }

    return(
        <div><h2> Child Component </h2>
    
    <button onClick={sendStudentName} >send name to parent </button> </div>
)
}


function ParentTeacher() {

  function receiveStudentName(studentName) {
    console.log("Received from child:", studentName);
  }

  return (
    <div>
      <h1>Parent Component</h1>

      <ChildStudent onSendName={receiveStudentName} />
    </div>
  );
}

export default ParentTeacher;