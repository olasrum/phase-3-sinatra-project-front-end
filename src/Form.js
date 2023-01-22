import React, {useState} from "react";

function Form({ exerciseCategories, onNewExerciseFormSubmit}) {
    const [newExerciseName, setNewExerciseName] = useState("")
    const [newExerciseCategoryId, setNewExerciseCategoryId] = useState("")

    const categoriesWithoutAll = exerciseCategories.filter((category) => (category !== "All"))
    const options = categoriesWithoutAll.map((category) => {
        return (
            <option key={category} value={category}>{category}</option>
          )
    })

    function handleSelectedCategory(event) {
        setNewExerciseCategoryId(exerciseCategories.indexOf(event.target.value))
    }

    function handleNameChange(event) {
        setNewExerciseName(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()

        fetch("http://localhost:9292/exercises", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: newExerciseName,
              category_id: newExerciseCategoryId,
            }),
          })
            .then((r) => r.json())
            .then((newExercise) => {
                onNewExerciseFormSubmit(newExercise);
                setNewExerciseName("");
            });
           
    }
   
    return (
        <div>
        <form onSubmit={handleSubmit} className="new-exercise-form">
            <label>
                Name: 
                <input 
                type="text" 
                onChange={handleNameChange} 
                value={newExerciseName}>
                </input>
            </label>
            <label> Category:
                <select onChange={handleSelectedCategory}>
                    <option selected disabled hidden>Choose a Category</option>
                    {options}
                </select>
            </label>
            <input type="submit" value="Add Exercise"></input>
        </form>
        </div>
    )
    
}

export default Form;