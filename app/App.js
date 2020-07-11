import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store';

import GeoView from './containers/GeoView';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <GeoView />
      </Provider>
    );
  }
}

export default App;
