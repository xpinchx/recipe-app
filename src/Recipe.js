import React from 'react';
import style from './recipe.module.css';


const Recipe = ({title, calories, servings, image, ingredients, url, dietLabels}) => {


    return(
        <div className={style.recipe}>
            <a href={url}><h1>{title}</h1></a>

            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>{Math.round(calories/servings)} Calories per serving</p>
            <img className={style.image} src={image} alt="" />
            <ul className={style.label}>
                {dietLabels.map(label => (
                    <li>{label}</li>
                ))}
            </ul>

        </div>
    );
}

export default Recipe;