import React from 'react';

export class Ingredient extends React.Component {
    render() {
        var ingredient = null;
        switch (this.props.type) {
            case 'bread-top':
                ingredient = (
                    <div className="bread-top">
                        <div className="seeds"></div>
                        <div className="seeds2"></div>
                    </div>
                );
                break;

            case 'bread-bottom':
                ingredient = (<div className="bread-bottom"></div>);
                break;

            case 'salad':
                ingredient = (<div className="salad"></div>);
                break;

            case 'bacon':
                ingredient = (<div className="bacon"></div>);
                break;

            case 'cheese':
                ingredient = (<div className="cheese"></div>);
                break;

            case 'meat':
                ingredient = (<div className="meat"></div>);
                break;

            default:
                ingredient = null;
                break;
        }
        return ingredient;
    }
}