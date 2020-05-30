import React from 'react';
import { Burger } from '../component/Burger/Burger';
export class BurgerBuilderContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Burger />);
    }
}