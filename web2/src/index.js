import React, { Component} from 'react';
import {render} from 'react-dom';
import MainApp from './main.component.js';

// Bootstrapのスタイルシート側の機能を読み込む

import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';


// BootstrapのJavaScript側の機能を読み込む
import 'bootstrap';


class App extends Component {
  render () {
    return <div>
        <p>Hello React!</p>
        <MainApp />        
        </div>;
  }
}

render(<App/>, document.getElementById('content'));
