import React from 'react';
import './App.css';
import EachBorders from './EachBorders';
function Details(props){
    return(
        <div className="card-wrapper">
            <div className="cards">
                <div className="flag">
                <img src={props.image} alt=""/>
                </div>
                <div className="details">
                    <p>Name: {props.name}</p>
                    <p>Capital: {props.capital}</p>
                    <p>Population: {props.population}</p>
                    <p>Domain: {props.domain}</p>
                    <p>Currencies: {props.currencies}</p>
                    <p>Languages: {props.languages}</p>
                </div>
            </div>
            <div><EachBorders name={props.name} codes={props.alpha3Code} borders={props.borders}/></div>
        </div>
    );
}

export default Details;