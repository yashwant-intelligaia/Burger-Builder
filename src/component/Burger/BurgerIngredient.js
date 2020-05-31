import React from 'react';
import './../../style/burgerIngredient.css';

export class BurgerIngredient extends React.Component {
    render() {
        return (
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
        );
    }
}