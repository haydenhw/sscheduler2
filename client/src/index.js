import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import DesignTool from './components/DesignTool';
import SelectMoudles from './components/SelectMoudles';
import Projects from './components/Projects';
import store from './store';

ReactDOM.render(
  <Provider store={ store }>
    <Router history={hashHistory}>
      <Route path="/select_modules" component={SelectMoudles}/> 
      <Route path="/design" component={DesignTool}/> 
      <Route path="/*" component ={Projects}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
