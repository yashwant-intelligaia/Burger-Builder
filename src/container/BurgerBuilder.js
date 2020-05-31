import React from 'react';
import {Burger} from '../component/Burger/Burger';
import {Menu} from './../component/Burger/Menu';
// import {Order} from './../component/Burger/Order';
export class BurgerBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredient:{
                salad:3,
                bacon:2,
                cheese:1,
                meat:0
            },
            total:2,
            order:false,
            price :{
                salad:0.2,
                bacon:0.4,
                cheese:0.2,
                meat:1
            },
            maxQuantity:3
        };
        this.handleAddIngredient = this.handleAddIngredient.bind(this);
        this.handleRemoveIngredient = this.handleRemoveIngredient.bind(this);
    }

    handleAddIngredient = (type) =>{
        var previousCount = this.state.ingredient[type];
        console.log('-------------Add Ingredient-------------');
        console.log('previousCount of'+type+'=>',previousCount);
        var newCount = previousCount+1;
        console.log('newCount of'+type+'=>',newCount);
    }

    handleRemoveIngredient = (type) =>{
        console.log('-------------Remove Ingredient-------------');
        var previousCount = this.state.ingredient[type];
        console.log('previousCount of'+type+'=>',previousCount);
        var newCount = previousCount-1;
        console.log('newCount of'+type+'=>',newCount);
    }

    render() {
        return (
            <div className="container">
            {/* <Modal show={this.state.order} modalClosed={this.puchaseCancelHandler}>
            <Order ingredient={this.state.ingredient} total={this.state.total}/>
            </Modal> */}
                <div className="row">
                    <Burger ingredient={this.state.ingredient}/>
                    <Menu ingredient={this.state.ingredient} total={this.state.total} price={this.state.price} maxQuantity={this.state.maxQuantity} addIngredient={this.handleAddIngredient} removeIngredient={this.handleRemoveIngredient}/>
                </div>
            </div>
        );
    }
}