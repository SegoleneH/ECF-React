import React from 'react';

function Counter(props) {

    
    return (
        <div>
            <h1>Nombre de click :</h1>
            <p>{props.boutonCount}</p>

        </div>
    )
}

export default Counter;