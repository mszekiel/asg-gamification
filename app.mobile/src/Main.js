import React from 'react';
import { observer, inject } from 'mobx-react/native';

import AppLoader from './utils/AppLoader';
import IsNotLoggedNav from './navigation/IsNotLoggedNav';
import IsLoggedNav from './navigation/IsLoggedNav';

@inject('mainStore', 'userStore') @observer
class Main extends React.Component {
  render () {
    if (this.props.mainStore.isAppReady) {
      return <AppLoader />
    } else {
      if (!this.props.userStore.isLogged) {
        return <IsLoggedNav />
      } else {
        return <IsNotLoggedNav />
      }
    }
  }
}

export default Main;
