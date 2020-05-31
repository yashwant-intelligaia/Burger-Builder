import React from 'react';
import { Jumbotron, Button, ButtonGroup} from 'reactstrap';
export class BurgerMenu extends React.Component {
    render() {
        return (
            <div className="col-sm-6 col-xs-12 text-center" style={{ marginTop: 20 }}>
                <Jumbotron>
                    <div className="row">
                        <h4 style={{ width: '100%' }}>Current Price: $4.45</h4>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Salad</td>
                                <td>
                                    <ButtonGroup>
                                        <Button title="Add" onClick={this.handleAddIngredient}>+</Button>&nbsp;
                                                <Button title="Less">-</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                            <tr>
                                <td>Bacon</td>
                                <td>
                                    <ButtonGroup>
                                        <Button title="Add">+</Button>&nbsp;
                                                <Button title="Less">-</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                            <tr>
                                <td>Cheese</td>
                                <td>
                                    <ButtonGroup>
                                        <Button title="Add">+</Button>&nbsp;
                                                <Button title="Less">-</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                            <tr>
                                <td>Meat</td>
                                <td>
                                    <ButtonGroup>
                                        <Button title="Add">+</Button>&nbsp;
                                                <Button title="Less">-</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Button color="primary">Order Now</Button>
                </Jumbotron>
            </div>
        );
    }
}