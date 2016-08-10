// Framework imports
import React from 'react';

/**
 * Individual stock list item component.
 * Display-only. Has timer-based CSS class
 * manipulation on its root node in order to 
 * facilitate 'row added' visual cues.
**/

export default class StockListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newItem : true
        };
    }
    render() {
        return (
            <tr className={this.state.newItem ? 'new' : ''}>
                <td>{this.props.name}</td>
                <td>{this.props.description}</td>
                <td>
                    {parseFloat(this.props.price).toFixed(2)}
                    {this.props.isTaxable && <small> +VAT</small>}
                </td>
                <td>{this.props.availableDate}</td>
            </tr>
        );
    }
    componentWillMount() {
    	// Will trigger the removal of the '.new' CSS class
    	// shortly after component is mounted.
    	// Requires the parent component to have provided a 
    	// `key` for this child in order to preserve
    	// render/mount order.
        setTimeout(() => {
            this.setState({ newItem: false });
        }, 3000);
    }
};