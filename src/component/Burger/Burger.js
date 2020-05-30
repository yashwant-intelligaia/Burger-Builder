import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import { Alert } from 'reactstrap';
import './../../style/burger.css';

export class Burger extends React.Component{
    render(){
        return(
            <div>
            <div className="box">
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

            <Jumbotron>
                <div className="BreadTop"></div>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
            </div>
        );
    }
}