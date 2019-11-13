import React, { useState } from "react";
import styled from "styled-components";

const Form = () => {
    const [card, setCard] = useState({ title: ""}); 


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
            border: 1px solid rgb(144,238,144);

            &::placeholder {
                color: black;
                letter-spacing: 1px;
            }

        }

        button {
            padding: 5px;
            margin: 5px;
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
                width: 60%;
            }

        }
    }
    
    `;


return (
    <FormStyles>
    <form>
    <input placeholder="First Name" id="firstname" type="text" name="firstname" />
    <input placeholder="Cohort" id="cohort" type="text" name="cohort" />
    <input placeholder="Favorite Animal" id="favanimal" type="text" name="favanimal" />
    <div className="selectionbox">
    <label>Which one of these is your current strongest?</label>
    <select>
    <option>HTML</option>
    <option>HTML & Preprocessor</option>
    <option>JavaScript</option>
    <option>React</option>
    </select>
    </div>
    <button type="submit">Submit</button>
    </form>
    </FormStyles>
);
};

export default Form;