import React from 'react';
import {Button, ButtonGroup } from 'reactstrap';
export class Control extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.controlLabel} - {this.props.quantity}</td>
                <td>
                    <ButtonGroup>
                        <Button title="Add" disabled={this.props.quantity >= this.props.max} onClick={this.props.add}>+</Button>&nbsp;
                        <Button title="Less" disabled={this.props.quantity <=0} onClick={this.props.remove}>-</Button>
                    </ButtonGroup>
                </td>
            </tr>
        );
    }
}