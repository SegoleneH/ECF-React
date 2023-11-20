import React from 'react';

function ConditionalRender(props) {

    const conditionOui = props.condition ? <p>Vous aimez React !</p> : <p>Vous n'aimez pas React.</p>;

    return (
        <div>
            {conditionOui}
        </div>
    )
}
export default ConditionalRender;