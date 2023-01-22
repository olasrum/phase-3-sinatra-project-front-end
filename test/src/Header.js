import React from "react";

function Header({ darkMode, onDarkModeClick }) {
  return (
    <header>
      <h1>Workout List</h1>
      <button onClick={onDarkModeClick}>
        {darkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;