import React from 'react';
import './App.css';

function Cards(props){
    return(
        <div className="card-wrapper">
            <div className="cards">
                <div className="flag">
                   <img src={props.image} alt=""/>
                </div>
                <div className="details">
                    <p>{props.name}</p>
                    <p>{props.capital}</p>
                    <p>{props.population}</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;