import React, {Component} from 'react';

class Recipe extends Component {
    render() {
        const {title} = this.props;
        return (
            <div>Recipe {title}</div>
            );
    }
}

export default Recipe