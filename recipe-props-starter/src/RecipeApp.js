import React, { Component } from 'react';
import './RecipeApp.css';
import Recipe from './Recipe';
import Navbar from './Navbar';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
        <Recipe 
        title="pasta " 
        ingredients={['flour', 'water']}
        instructions = "Mix Ingredients"
        img="spaghetti.jpeg"
        />
      </div>
    );
  }
}

export default RecipeApp;
