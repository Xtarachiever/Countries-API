import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Border(props){
    const [boundaries,setBoundaries]=useState([]);
    const history=useHistory();

    const getBorders=(name)=>{
        history.push(`/countries/${name}`)
    }

    useEffect(()=>{
        getBoundaries();
    },[props.name])


    const getBoundaries=async ()=>{
    const res=await fetch(`https://restcountries.eu/rest/v2/alpha/${props.name}`);
        const pose=await res.json();
        setBoundaries(pose);
        // console.log(pose);
    };
    return(
            <button onClick={()=>getBorders(boundaries.name)}>{boundaries.name}</button>
    );
};

export default Border;