import React, {useState, useEffect} from "react";
import ExerciseList from "./ExerciseList";
import Header from "./Header";



function App() {
  const[darkMode, setDarkMode] = useState(true);
  const [exercises, setExercises] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [exerciseCategories, setExerciseCategories] = useState([]);
  const [categoryNames, setCategoryNames] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:9292/exercises")
      .then((r) => r.json())
      .then((exercises) => setExercises(exercises))
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/exercises_categories")
      .then((r) => r.json())
      .then(function(exerciseCategories) {
        setExerciseCategories(exerciseCategories)
        const categories_arr = exerciseCategories.map(e => e.category)
        categories_arr.unshift("All")
        setCategoryNames(categories_arr)});
  }, []);


  function handleDeleteExercise(key) {
    setExercises(exercises.filter((element) => (element.id !== key)))
  }

  function handleCategorySelected(category) {
    setSelectedCategory(category)
  }

  function addNewExercise(newExercise) {
    setExercises([...exercises, newExercise])
  }

  function handleDarkModeClick() {
    setDarkMode((darkMode) => !darkMode);
  }
  
  const selectedCategoryObj = exerciseCategories.find(obj => {
    return obj.name === selectedCategory
  })

  let selectedExercises = []
  if (selectedCategory === "All") {
    selectedExercises = exercises
  } else {
    selectedExercises = exercises.filter((exercise) => 
    (exercise.category_id === selectedCategoryObj.id))
  }

  return (
    <div className={"App " + (darkMode ? "dark" : "light")}>
      <Header darkMode={darkMode} onDarkModeClick={handleDarkModeClick}/>
      <ExerciseList 
      onDeleteExercise={handleDeleteExercise} 
      exercises={selectedExercises} 
      categoryNames={categoryNames} 
      onNewExerciseFormSubmit={addNewExercise}
      exerciseCategories={exerciseCategories}
      selectedCategory={selectedCategory} 
      onCategorySelected={handleCategorySelected}
      />
      </div>

  );
}

export default App;