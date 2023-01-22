import React from "react";

function Exercise({ category, name, exerciseId, onDeleteExercise }) {

    function handleClick() {
        fetch(`http://localhost:9292/exercises/${exerciseId}`, {
            method: "DELETE"
        });
        onDeleteExercise(exerciseId)}

    return (
        <div className="exercise">
            <div className="exercise-cat">{category}</div>
            <div className="exercise-name">{name}</div>
            <button className="delete-button" onClick={handleClick}>X</button>
        </div>
    )
}

export default Exercise;