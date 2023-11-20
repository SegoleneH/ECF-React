import React, {Fragment} from 'react';
import Bouton from './Bouton';

function Section(props) {

    return (
        <Fragment>
            <div>
                <h2>Section</h2>
                <p>Cliquez !</p>
                <Bouton handleCount= {props.handleCount}/>
            </div>
        </Fragment>
    )
}

export default Section;