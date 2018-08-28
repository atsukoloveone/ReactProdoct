// component that contains the functionalities that appear on top of
// the products table: create product
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'; 

class TopActionsComponent extends Component {
    render(){
        return (
            <div>
                <a href='#'
                    onClick={() => this.props.changeAppMode('create')}
                    className='btn btn-primary margin-bottom-1em'> Create product
                </a>
            </div>
        );
    }
}
export default TopActionsComponent;
