import React, { Component } from 'react';
import Navbar from './Navbar';
import RecipeList from './RecipeList';
import './RecipeApp.css';
import RecipeInput from './RecipeInput';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {   
            id: 0,
            title: "Cheesy Potatos",
            instructions: "Put Cheese all over the potatos, then grill it",
            ingredients: ["Cheese", "Potatos"],
            img: "CheesyPotatos.jpg"
        },
        {
            id: 1,
            title: "Salad",
            instructions: "Mix croutons, parmesan, dressing all over",
            ingredients: ["Salad", "Croutons", "Parmesan Cheese", "Caesar Dressing"],
            img: "Salad.jpeg"
        },
        {
            id: 2,
            title: "Pizza",
            instructions: "Put Pizza in the oven and heat it to 450 Fahrenheit for 20 minutes",
            ingredients: ["Frozen Pizza", "Extra Toppings"],
            img: "Pizza.jpg"
        }
        ],
        nextRecipeId: 3,
    }
  }
  
  handleSave(recipe) {
    
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeInput />
        <RecipeList recipes= {this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;