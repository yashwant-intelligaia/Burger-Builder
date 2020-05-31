import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Control } from './Control';
const items = [
    { label: 'Salad', key: 'salad' },
    { label: 'Bacon', key: 'bacon' },
    { label: 'Cheese', key: 'cheese' },
    { label: 'Meat', key: 'meat' },
]
export class BurgerMenu extends React.Component {
    render() {
        return (
            <div className="col-sm-6 col-xs-12 text-center" style={{ marginTop: 20 }}>
                <Jumbotron>
                    <div className="row">
                        <h4 style={{ width: '100%' }}>Current Price: ${this.props.total}</h4>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item =>
                                (<Control key={item.label} controlLabel={item.label} quantity={this.props.ingredient[item.key]} max={this.props.maxQuantity} add={() => this.props.addIngredient(item.key)} remove={() => this.props.removeIngredient(item.key)} />)
                            )
                            }
                        </tbody>
                    </table>
                    <Button color="primary">Order Now</Button>
                </Jumbotron>
            </div>
        );
    }
}