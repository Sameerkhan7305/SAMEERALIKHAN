function Student(props) {
  return (
    <div className="studentCard">
      <h2>Name : {props.name}</h2>
      <h2>Course : {props.course}</h2>
    </div>
  );
}

export default Student


