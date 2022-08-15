// write code for Welcome component here
import React from 'react';

const Welcome = (props) => {

    // const name = props.name;

    return(
        <div>
            <h1>{props.name}</h1>
            <h2>{props.greeting}</h2>
        </div>
    )

}

export default Welcome;
