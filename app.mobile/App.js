import React from 'react';
import { Provider, observer } from 'mobx-react/native';

import Main from './src/Main';
import storage from './src/storage';

class App extends React.Component {
  render () {
    return (
      <Provider {...storage}>
        <Main />
      </Provider>
    )
  }
}

export default App;
