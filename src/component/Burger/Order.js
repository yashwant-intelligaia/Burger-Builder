import React from 'react';
export class Order extends React.Component {
    ingredientSummary = Object.keys(this.props.ingredient)
        .map(igKey => {
            return (<li key={igKey}>
                <span style={{ textTransform: 'captilize' }}> {igKey}: {this.props.ingredient[igKey]} </span>
            ( x ${this.props.price[igKey]})
            </li>);
        });
    render() {
        return (
            <div className="col-sm-12">
                <h3 className="text-center">Your Order</h3>
                <p> A delicious burger with following ingredients: </p>
                <ul>
                    {this.ingredientSummary}
                </ul>
                <p>Base price: <span>&#36;</span> <bold>{this.props.basePrice}</bold></p>
                <p>Total Price: <span>&#36;</span> <bold>{this.props.totalPrice.toFixed(1)}</bold></p>
            </div>
        );
    }
}