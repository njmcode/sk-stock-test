// Framework imports
import React from 'react';

// Component imports
import AddStockForm from '../components/AddStockForm.jsx';
import StockList from '../components/StockList.jsx';

/**
 * Main App class for the stock management system.
 * Provides basic HTML scaffolding (header etc) and
 * hooks up the two main components to the dummy data.
**/

export default class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items
        };
    }
    
    // New items are just appended to the start of the data array.
    // In practice we'd want to make sure the initial data source
    // is deep-cloned or otherwise made immutable on init, to prevent
    // referential side-effects.  Data persistence would take place
    // here too if we were XHR'ing to a server.
    onAddItem(itemData) {
        this.state.items.unshift(itemData);
        this.setState(this.state);
    }
    
    render() {
        return (
            <div className="sk-wrap">
                <header>
                    <h1>Stock Katalogue</h1>
                </header>
                <div className="sk-app">
                    <AddStockForm 
                    	onAddItem={this.onAddItem.bind(this)} 
                    	currencySymbol={this.props.currencySymbol} />
                    <StockList 
                    	items={this.state.items} 
                    	currencySymbol={this.props.currencySymbol} />
                </div>
            </div>
        );
    }
};