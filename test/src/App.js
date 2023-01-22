import React, {useEffect, useState} from "react";
import Header from "./Header";
import Search from "./Search";
import ExerciseList from "./ExerciseList";

function App() {
  const[darkMode, setDarkMode] = useState(true);
  const[exercises, setExercises] = useState([]);
  // const[categories, setCategories] = useState([]);
  // const[categoryNames, setCategoryNames] = useState([]);
  const[search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/weekly_workout")
      .then((r) => r.json())
      .then((exercises) => setExercises(exercises))
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:9292/categories")
  //     .then((r) => r.json())
  //     .then((categories) => setCategories(categories))
  // }, []);

  function handleDarkModeClick() {
    setDarkMode((darkMode) => !darkMode);
  }
  const displayedExercises = exercises.filter((exercise) =>
  exercise.name.toLowerCase().includes(search.toLowerCase()));

  // const displayedCategories = categories.filter((category) =>
  // category.category.toLowerCase().includes(search.toLowerCase()));
  
  return (
    <main className={"App " + (darkMode ? "dark" : "light")}>
      <Header darkMode={darkMode} onDarkModeClick={handleDarkModeClick}/>
      <Search search={search} onSearchChange={setSearch}/>
      <ExerciseList 
        exercises={displayedExercises}
        // categories={displayedCategories}
      />
    </main>
  );
}

export default App;
