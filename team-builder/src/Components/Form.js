import React, { useState } from "react";
import styled from "styled-components";

const FormStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30rem;
  width: 30rem;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 100%;

    input {
      padding: 5px;
      margin: 5px;
      border: 1px solid rgb(144, 238, 144);

      &::placeholder {
        color: black;
        letter-spacing: 1px;
      }
    }

    button {
      padding: 5px;
      margin: 5px;
      background: #fff;
      border: 2px solid black;
      font-weight: 900;
      letter-spacing: 1px;
      line-height: 20px;
      border-radius: 10px;
      text-decoration: none;
      text-transform: uppercase;

      &:hover {
        background: rgb(144, 238, 144);
        border-radius: 12px;
        border: 2px solid rgb(144, 238, 144);
      }
    }

    .selectionbox {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 5px;

      label {
        margin: 5px;
      }

      select {
        background: #fff;
        border: 1.3px solid black;
        width: 60%;
        padding: 2px;

        option {
          color: black;
        }
      }
    }
  }
`;

const Form = props => {
  const [card, setCard] = useState({
    firstname: "",
    cohort: "",
    favanimal: "",
    selection: ""
  });

  const handleChanges = e => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
      e.preventDefault();
      props.addNewCard(card);
      setCard({ firstname: "", cohort: "", favanimal: "", selection: ""})
  }

  return (
    <FormStyles>
      <form onSubmit={submitForm}>
        <input
          value={card.firstname}
          placeholder="First Name"
          type="text"
          name="firstname"
          onChange={handleChanges}
          required
        />
        <input
          value={card.cohort}
          placeholder="Cohort"
          type="text"
          name="cohort"
          onChange={handleChanges}
          required
        />
        <input
          value={card.favanimal}
          placeholder="Favorite Animal"
          type="text"
          name="favanimal"
          onChange={handleChanges}
          required
        />
        <div className="selectionbox">
          <label htmlFor="selection">
            Which one of these is your current strongest?
          </label>
          <select onChange={handleChanges} name="selection" id="selection">
            <option name="option" id="option" type="text">
              HTML
            </option>
            <option name="option" id="option" type="text">
              HTML & Preprocessor
            </option>
            <option name="option" id="option" type="text">
              JavaScript
            </option>
            <option name="option" id="option" type="text">
              React
            </option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </FormStyles>
  );
};

export default Form;
