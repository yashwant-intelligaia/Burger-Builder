import React from 'react';
import './../../style/burgerIngredient.css';
import { Ingredient } from './Ingredient';

export class Burger extends React.Component {
    render() {
        let ingredients = Object.keys(this.props.ingredient)
            .map((item) => {
                return [...Array(this.props.ingredient[item])].map((val, quantity) => {
                    return <Ingredient type={item} key={item + quantity} />
                });
            }).reduce((arr, element) => {
                return arr.concat(element);
            }, []);

        return (
            <div className="col-sm-6 col-xs-12 box">
                <Ingredient type="bread-top" />
                {ingredients}
                <Ingredient type="bread-bottom" />
            </div>
        );
    }
}