import { createContext } from "react";

const CourseContext = createContext();

function CourseDetails() {
  return (
    <CourseContext.Consumer>
      {(course) => (
        <div>
          <h2>Course: {course.name}</h2>
          <p>Duration: {course.duration}</p>
        </div>
      )}
    </CourseContext.Consumer>
  );
}

function Example_ProviderConsumerPattern() {
  const courseInfo = {
    name: "React JS",
    duration: "3 Months"
  };

  return (
    <div>
      <h1>Provider and Consumer Pattern</h1>

      <CourseContext.Provider value={courseInfo}>
        <CourseDetails />
      </CourseContext.Provider>
    </div>
  );
}

export default Example_ProviderConsumerPattern;