import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import ReadProductsComponent from './product/read_products.component.js';
import DeleteProductComponent from './product/delete_product.component.js';
import UpdateProductComponent from './product/update_product.component.js';
import CreateProductComponent from './product/create_product.component.js';
import ReadOneProductComponent from './product/read_one_product.component.js';

class MainApp extends Component {
    // initial mode is 'read' mode
    constructor(props, context) {
        super(props, context);
        this.state = {
            currentMode: 'read',
            productId: null
        };
    }

    // used when use clicks something that changes the current mode
      changeAppMode = (newMode, productId) => {

            this.setState({
                currentMode: newMode
            });
            if (productId !== undefined) {
                this.setState({
                    productId: productId
                });
            }
      }

        // render the component based on current or selected mode
        render () {

            var modeComponent = <ReadProductsComponent  changeAppMode = {this.changeAppMode}
            />;

            switch (this.state.currentMode) {
                case 'read':
                    break;
                case 'readOne':
                    modeComponent = <ReadOneProductComponent productId = {this.state.productId}
                    changeAppMode = {this.changeAppMode}          />;
                    break;
                case 'create':
                    modeComponent = <CreateProductComponent changeAppMode = {this.changeAppMode}  />;
                    break;
                case 'update':
                    modeComponent = <UpdateProductComponent productId = {this.state.productId} changeAppMode = {this.changeAppMode}  />;
                    break;
                case 'delete':
                    modeComponent = <DeleteProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                    break;
                default:
                    break;
            }

            return modeComponent;
        }
}

// go and render the whole React component on to the div with id 'content'

export default MainApp;
