import React from 'react';
import { AppLoading, Font, Icon } from 'expo';
import { observer, inject } from 'mobx-react/native';


@inject('mainStore') @observer
class AppLoader extends React.Component {
  render () {
    return (
      <AppLoading
        startAsync={this._loadResourcesAsync}
        onError={this._handleLoadingError}
        onFinish={this._handleFinishLoading}
      />
    );
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.props.mainStore = true;
  };

}

export default AppLoader;
