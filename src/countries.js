import React,{useEffect,useState} from 'react';
import Cards from './Cards';
import './App.css';
import {Link} from 'react-router-dom';

function Countries() {
  const [states,setState]=useState([]);
  const [search,setSearch]=useState('');
  const [region,setRegion]=useState([]);
  const [status,setStatus]=useState("All");
  useEffect(()=>{
    getCountries();
    getRegion();
  },[status]);

  const getSearch=(e)=>{
    if(e.target.value!==""){
      setSearch(e.target.value);
      // setState(filteredCountries);
      setRegion(filteredCountries)
    }
    else{
      setRegion(states);
      setSearch("");
    }
  }
  const getStatus=(e)=>{
    setStatus(e.target.value);
  }
  const getRegion= ()=>{
    // const res=await fetch("https://restcountries.eu/rest/v2/all");
    // const pose=await res.json();
    // const filterCountries=pose.filter((eachRegion)=>(eachRegion.region===e.target.value))
    // if(e.target.value==="all"){
    //   setState(pose)
    // }
    // else{
    //   setState(filterCountries);
    // }
    setSearch("");
    switch(status){
      case 'Americas':
        setRegion(states.filter(state=>state.region==='Americas'));
        break;
      case 'Africa':
        setRegion(states.filter(state=>state.region==='Africa'));
        break;
      case 'Europe':
        setRegion(states.filter(state=>state.region==='Europe'));
        break;
      case 'Asia':
        setRegion(states.filter(state=>state.region==='Asia'));
        break;
      case 'Polar':
        setRegion(states.filter(state=>state.region==='Polar'));
        break;
      case 'Oceania':
        setRegion(states.filter(state=>state.region==='Oceania'));
        break;
      default:
        setRegion(states);
    }
  }

  const uniqueCountries=states.map((city)=>city.region);
  const uniqueRegion=Array.from(new Set(uniqueCountries)).sort();
  
  const filteredCountries=region.filter((state)=>(state.name.toLowerCase().includes(search.toLowerCase())))

  const getCountries= async ()=>{
    try{
      const response=await fetch("https://restcountries.eu/rest/v2/all")
      const data=await response.json();
      console.log(data);
      setState(data);
    }
    catch{
      alert('Sorry something went wrong')
    }
  };

  return (
    <div className="App">
        <div className="sorts">
          <input type="text" onChange={getSearch}  placeholder="Search" value={search}/>
          <select onChange={getStatus}>
          {
              uniqueRegion.map(unique=>{
                if(unique===""){
                  return(<option value="all">All</option>)
                }
                else return(<option value={unique}>{unique}</option>)
              })
          }
          </select>
        </div>
        {region.map(cards=>(
              <Link to={`/countries/${cards.name}`}>
                  <Cards key={cards.name} name={(cards.name)} capital={cards.capital} population={cards.population}
                  image={cards.flag} code={cards.borders} region={cards.region}/>
              </Link>
          ))}
    </div>
  );
};

export default Countries;
