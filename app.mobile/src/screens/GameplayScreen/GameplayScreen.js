import React, { Component } from 'react';
import { observer, inject } from 'mobx-react/native';
import { Content, Text, Header, Container, Title, Button, Icon, Left } from 'native-base';

import { StyledListSeparator, StyledListIcon } from '../../components';
import GameList from './components/GameList';
import TeamList from './components/TeamList';

@inject('userStore', 'gameStore') @observer
class GameplayScreen extends Component {

  render () {

    return (
      <Container>
        <Content>
          <Text>
            HELLO WORLD
          </Text>
        </Content>
      </Container>
    )

  }
}

export default GameplayScreen;
