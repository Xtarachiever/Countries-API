import React from 'react';
import Border from './Border';
function EachBorders(props){
    return(
        <div>
            <p>Hello</p>
            {/* <p>{props.name}</p> */}
                {(props.borders).map(element=>
                <Border name={element} key={element}/>)
                }
        </div>
    );
}
export default EachBorders;