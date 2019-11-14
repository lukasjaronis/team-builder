import React, { useState } from "react";
import './App.css';
import Form from "./Components/Form";
import Cards from "./Components/Cards";





function App() {
  const [cards, setCards] = useState([]);

  const addNewCard = card => {
    const newCard = {
      id: Date.now(),
      firstname: card.firstname,
      cohort: card.cohort,
      favanimal: card.favanimal,
      selection: card.selection
    };
    setCards([...cards, newCard]);
  };
  return (
    <div className="App">

    <Form addNewCard={addNewCard} />
    <Cards cards={cards} />

    </div>
  );
}

export default App;


