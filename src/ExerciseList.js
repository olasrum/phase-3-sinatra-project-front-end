import React from "react";
import Exercise from "./Exercise";

function ExerciseList({exercises}) {

  const exerciseList = exercises.map((exercise) => (
    <Exercise key={exercise.id}
              exercise={exercise}
    />
  ))

  return (
    <div>
      {exerciseList}
    </div>
  );
}

export default ExerciseList;