import React from "react";

function Exercise({exercise}) {


  return (
      <div className="workout-container">
        <p className="exercises">{exercise.name} </p>
        <sup className="notes">{exercise.note}</sup>
      </div> 
  );
}

export default Exercise;