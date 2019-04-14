import React, { Component } from 'react';
import { Content } from 'native-base';
import GameList from '../../components/GameList';

class GameSettings extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <Content>
        <GameList />
      </Content>
    )
  }

}

export default GameSettings;
