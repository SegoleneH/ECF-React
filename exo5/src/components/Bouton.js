import React from 'react';

function Bouton(props) {


    return (
        <div>
            <button onClick={props.handleCount}>Cliquez ici !</button>
        </div>
    );

}

export default Bouton;