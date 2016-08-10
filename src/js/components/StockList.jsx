// Framework imports
import React from 'react';

// Component imports
import StockListItem from './StockListItem.jsx';

/**
 * Item list component.  Minimal functionality
 * beyond rendering child components and passing
 * in some props.
**/

export default class StockList extends React.Component {

    render() {
        console.log(this.props.items);
        
        // Assign a key to each child node in order to preserve
        // render/mount order on subsequent updates.
        // Needed so that the 'new row' CSS transition is applied
        // to the correct node.
        // TODO: investigate performance implications of this
        const itemNodes = this.props.items.map(item => {
            return (
                <StockListItem {...item} key={item.name} />
            );
        });
        return (
            <div className="sk-stock-list">
                <h3>Current stock</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price ({this.props.currencySymbol || '&pound;'})</th>
                            <th>Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemNodes}    
                    </tbody>
                </table>
            </div>
        );
    }
};