import React, {Component} from 'react';

class Recipe extends Component {
    render() {
        const {title, img, instructions} = this.props;
        const ingredients = this.props.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
            ));
        return (
            <div>
            <div>
            <img src={img} alt={title} />
            </div>
            <div>
                <h3>Recipe {title}<h3>
                <h4>Ingredients:</h4>
                    <ul>
                        {ingredients}
                    </ul>
                <h4>Instructions:</h4>
                <p>{instructions} </p>
                </div>
            </div>
            );
    }
}

export default Recipe