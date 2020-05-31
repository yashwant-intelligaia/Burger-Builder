import React from 'react';
import {BurgerIngredient} from './../component/Burger/BurgerIngredient';
import {BurgerMenu} from './../component/Burger/BurgerMenu';
// const price = {
//     salad:0.5,
//     bacon:0.4,
//     cheese:0.2,
//     meat:1
// }
export class BurgerBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredient:{
                salad:0,
                bacon:0,
                cheese:0,
                meat:0
            }
        };
        this.total = 2;
        this.handleAddIngredient = this.handleAddIngredient.bind(this);
        // this.removeIngredient = this.removeIngredient.bind(this);
    }

    handleAddIngredient(type){
        var previousCount = this.state.ingredient[type];
        console.log('-------------Add Ingredient-------------');
        console.log('previousCount of'+type+'=>',previousCount);
        var newCount = previousCount+1;
        console.log('newCount of'+type+'=>',newCount);
    }

    removeIngredient(type){
        console.log('-------------Remove Ingredient-------------');
        var previousCount = this.state.ingredient[type];
        console.log('previousCount of'+type+'=>',previousCount);
        var newCount = previousCount-1;
        console.log('newCount of'+type+'=>',newCount);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <BurgerIngredient />
                    <BurgerMenu />
                </div>
            </div>
        );
    }
}