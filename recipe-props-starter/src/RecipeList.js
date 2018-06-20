import React, {Component} from 'react';
import Recipe from './Recipe';
import 'RecipeList.css';
import PropTypes from 'prop-types';

class RecipeList extends Component {
    static defaultProps = {
        recipes: [
        {
            title: "Cheesy Potatos",
            instructions: "Put Cheese all over the potatos, then grill it",
            ingredients: ["Cheese", "Potatos"],
            img: "CheesyPotatos.jpg"
        },
        {
            title: "Salad",
            instructions: "Mix croutons, parmesan, dressing all over",
            ingredients: ["Salad", "Croutons", "Parmesan Cheese", "Caesar Dressing"],
            img: "Salad.jpeg"
        },
        {
            title: "Pizza",
            instructions: "Put Pizza in the oven and heat it to 450 Fahrenheit for 20 minutes",
            ingredients: ["Frozen Pizza", "Extra Toppings"],
            img: "Pizza.jpg"
        }
        ]
        
    }
    
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object)
    }
    
    render() {
        const recipes = this.prop.recipes.map((r, index) => (
        <Recipe key={index} {...r} />
        ));
        
        return (
            <div className="recipe-list">
            {recipes}
            </div>)
    }
}

export default RecipeList;