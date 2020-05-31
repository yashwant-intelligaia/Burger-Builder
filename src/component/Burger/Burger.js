import React from 'react';
import { Jumbotron, Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './../../style/burger.css';

export class Burger extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-xs-12 box">
                        <div className="bread-top">
                            <div className="seeds"></div>
                            <div className="seeds2"></div>
                        </div>
                        <div className="salad"></div>
                        <div className="salad"></div>
                        <div className="bacon"></div>
                        <div className="cheese"></div>
                        <div className="meat"></div>
                        <div className="salad"></div>
                        <div className="cheese"></div>
                        <div className="meat"></div>
                        <div className="bread-bottom"></div>
                    </div>
                    <div className="col-sm-6 col-xs-12 text-center" style={{marginTop:20}}>
                        <Jumbotron>
                            <div className="row">
                                <h4 style={{width:'100%'}}>Current Price: $4.45</h4>
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
                                                <Button title="Add">+</Button>&nbsp;
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
                </div>
            </div>
        );
    }
}