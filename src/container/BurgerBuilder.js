import React from 'react';
import { Burger } from '../component/Burger/Burger';
import { Menu } from './../component/Burger/Menu';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Order } from './../component/Burger/Order';
export class BurgerBuilder extends React.Component {
    state = {
        ingredient: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        basePrice: 2,
        totalPrice:2,
        order: false,
        price: {
            salad: 0.2,
            bacon: 0.4,
            cheese: 0.2,
            meat: 1
        },
        maxQuantity: 3
    };

    handleOrderBurger = () => {
        this.setState({ order: true });
    }

    confirmOrder = () =>{
        window.alert("Thanks for making the order!");
        this.setState({ingredient:{salad:0, bacon:0, cheese:0, meat:0}, totalPrice:this.state.basePrice});
        this.toggle();
    }

    handleAddIngredient = (type) => {
        var previousCount = this.state.ingredient[type];
        var ingredientPrice = this.state.price[type];
        var newIngredients = this.state.ingredient;
        var totalPrice = (this.state.totalPrice) + (ingredientPrice * 1);
        newIngredients[type] = previousCount + 1;
        this.setState({ ingredient: newIngredients, totalPrice:totalPrice });
    }

    handleRemoveIngredient = (type) => {
        var previousCount = this.state.ingredient[type];
        var ingredientPrice = this.state.price[type];
        var newIngredients = this.state.ingredient;
        var totalPrice = (this.state.totalPrice) - (ingredientPrice * 1);
        newIngredients[type] = previousCount - 1;
        this.setState({ ingredient: newIngredients, totalPrice:totalPrice });
    }

    toggle = () => {
        this.setState({ order: !this.state.order })
    }

    render() {
        return (
            <div className="container">
                <Modal isOpen={this.state.order} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Order Detail</ModalHeader>
                    <Order ingredient={this.state.ingredient} totalPrice={this.state.totalPrice} price={this.state.price} basePrice={this.state.basePrice} />
                    <ModalFooter>
                        <Button color="primary" onClick={this.confirmOrder}>Confirm</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <div className="row">
                    <Burger ingredient={this.state.ingredient} />
                    <Menu ingredient={this.state.ingredient} basePrice={this.state.basePrice} price={this.state.price} maxQuantity={this.state.maxQuantity} addIngredient={this.handleAddIngredient} removeIngredient={this.handleRemoveIngredient} order={this.handleOrderBurger} />
                </div>
            </div>
        );
    }
}