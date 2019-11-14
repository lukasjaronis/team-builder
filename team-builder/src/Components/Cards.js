import React from "react";
import styled from "styled-components";

const CardStyles = styled.div`

.card-list {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    height: 100%;
    background: whitesmoke;
    border: 1px solid grey;
    

    .card {
        height: 20rem;
        width: 20rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border: 2px solid grey;
        padding: 10px;
        margin: 10px;
        h2 {
            font-weight: 900;
        }
        span {

        }
    }
}

`;




const Cards = props => {
    return (
        <CardStyles>
        <div className="card-list">

        {props.cards.map(card => (
            <div className="card" key={card.id}>

            <h2>{card.firstname}</h2>
            <span>Cohort: {card.cohort}</span>
            <span>Favorite Animal: {card.favanimal}</span>
            <span>{card.selection}</span>

            </div>
        ))}

        </div>
        </CardStyles>
    );
};

export default Cards;