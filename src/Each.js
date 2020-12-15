import React,{useEffect,useState} from 'react';
import EachDetails from './EachDetails';
import './App.css';

function Each({match}) {
  const [state,setState]=useState([]);
  // console.log(match)

  useEffect(()=>{
    getCountryDetails();
  },[]); 

  const getCountryDetails= async ()=>{
    try{
      const response=await fetch(`https://restcountries.eu/rest/v2/name/${match.params.name}`);
      const datas=await response.json();
      setState(datas);
      // console.log(datas)
    }
    catch{
      alert('Sorry something went wrong')
    }
  };
  return (
    <div>
      {
        state.map(state=>(
          <EachDetails name={state.name} key={state.name} image={state.flag} capital={state.capital} population={state.population} 
          domain={state.topLevelDomain} currencies={state.currencies.map(currency=>currency.name).join(", ")} 
          languages={state.languages.map(language=>language.name).join(", ")}
          borders={state.borders} alpha3Code={state.alpha3Code}/>
        ))
      }
    </div>
  ); 
};

export default Each;
