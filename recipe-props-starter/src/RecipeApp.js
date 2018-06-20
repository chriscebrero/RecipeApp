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
        showForm: false
    }
    this.handleSave = this.handleSave.bind(this);
  }
  
  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [... this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }
  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({showForm: true})}/>
        { showForm ? <RecipeInput onSave={this.handleSave}
        onClose={() => this.setState({showForm: false})}
        /> : null }
        <RecipeList recipes= {this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;