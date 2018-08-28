import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'; 
import TopActionsComponent from './top_actions.component.js';
import ProductsTable from './product_table.component.js';

class ReadProductsComponent extends Component {
    // initial mode is 'read' mode
    constructor(props, context) {
        super(props, context);
        this.state = {
            products: []
        };
    }

 
    // on mount, fetch all products and stored them as this component's state
    componentDidMount() {
 
        this.serverRequest = $.get("http://www.mysite.local/api/product/read.php", function (products) {
            this.setState({
                products: products.records
            });
        }.bind(this));
    }
 
    // on unmount, kill product fetching in case the request is still pending
    componentWillUnmount() {
        this.serverRequest.abort();
    }
 
    // render component on the page
    render() {
        // list of products
        var filteredProducts = this.state.products;
        $('.page-header h1').text('Read Products');
 
        return (
            <div className='overflow-hidden'>
                <TopActionsComponent changeAppMode={this.props.changeAppMode} />
 
                <ProductsTable
                    products={filteredProducts}
                    changeAppMode={this.props.changeAppMode} />
            </div>
        );
    }
}
export default ReadProductsComponent;
