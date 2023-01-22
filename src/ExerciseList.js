import React from "react";
import Exercise from "./Exercise";
import Search from "./Search"
import Form from "./Form";

function ExerciseList ({onDeleteExercise, exercises, categoryNames, onNewExerciseFormSubmit,exerciseCategories, selectedCategory, onCategorySelected}) {

    const exerciseElements = exercises.map((exercise) => {
        const categoryId = exercise.category_id
        return (
            <Exercise
                key={exercise.id}
                name={exercise.name}
                category={categoryNames[categoryId]}
                onDeleteExercise={onDeleteExercise}
                exerciseId={exercise.id}
                className={exercise}
            />
        )
    })

    return (
        <div>
            <Form 
            exerciseCategories={categoryNames} 
            onNewExerciseFormSubmit={onNewExerciseFormSubmit} />
            <br></br>
            <Search 
            exerciseCategories={categoryNames} 
            selectedCategory={selectedCategory} 
            onCategorySelected={onCategorySelected}/>
            <div>{exerciseElements}</div>
        </div>
        )
}

export default ExerciseList