import React from 'react'

        // Objectif : Utilisation de onChange et de e.target
// Créez un composant Form avec un champ de saisie de texte. L'état du champ de saisie doit être stocké
// dans l'état local du composant App et être affiché en même temps que la saisie de l'utilisateur, dans
// un paragraphe directement en dessous.

const Form = (props) => {

  return (
    <div>
        <label htmlFor="paragraph">
            Paragraph : 
            <input onChange={props.onChange} type="text" id='paragraph'/>
        </label>
        <br />
        <p>{props.paragraph}</p>
    </div>
  )
}

export default Form