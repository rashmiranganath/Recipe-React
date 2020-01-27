import React from 'react';
import style from './recipe.module.css'


const Recipes = ({title,calories,img,ingredients}) =>{
  return(
    <div className = {style.recipe}>
      <h1>{title}</h1>
      <h6>calories : {calories}</h6>
      <ol>{ingredients.map(ingredient => (<li>{ingredient.text}</li>))}</ol>

      <img src={img} alt = " "/>
    </div>
  )
}

export default Recipes