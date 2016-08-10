// Framework imports
import React from 'react';

/**
 * Component for adding stock items.
 * 'Add item' callback is passed in as a prop.
**/

export default class AddStockForm extends React.Component {

    // Arguable that the values of the form should be tracked
    // as component state rather than refs.  Also aware that
    // using strings as refs is up for deprecation in favour of
    // callback functions.  Have used them here for simplicity's
    // sake.
    onSubmit(e) {
        e.preventDefault();
        var itemData = {
            name: this.refs.name.value,
            description: this.refs.description.value,
            price: parseFloat(this.refs.price.value).toFixed(2),
            availableDate: this.refs.availableDate.value,
            isTaxable: this.refs.isTaxable.checked
        };
        // TODO: validation

        // Callback passed in from parent component
        this.props.onAddItem(itemData);
        // Clear the form once added
        this.refs.itemForm.reset();
    }
    
    render() {
        var pricePh = 'Price (' + this.props.currencySymbol + ')';
        return (
            <form className="sk-stock-add" onSubmit={this.onSubmit.bind(this)} ref="itemForm">
                <fieldset>
                    <legend><h3>Add item</h3></legend>
                    <ul>
                        <li><input type="text" placeholder="Item name" ref="name" /></li>
                        <li><input type="text" placeholder="Item description" ref="description" /></li>
                        <li><input type="number" placeholder={pricePh} ref="price" min="0.00" step="any" max="999.99" pattern="^\d+(\.|\,)\d{2}$" /></li>
                        <li><input type="date" placeholder="Available date" ref="availableDate" /></li>
                        <li><input type="checkbox" ref="isTaxable" /> +VAT</li>
                    </ul>
                    <div className="controls">
                        <input type="submit" /> <input type="reset" />
                    </div>
                </fieldset>
            </form>
        );
    }
    
    componentDidMount() {
    	// Autofocus the name field on mount, if defined in props
        if (this.props.autofocus) {
        	this.refs.name.focus();
        }
    }
};