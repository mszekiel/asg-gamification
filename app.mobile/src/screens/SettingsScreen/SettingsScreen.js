import React, { Component } from 'react';
import { observer, inject } from 'mobx-react/native';
import { Content, Text, Header, Container, Title, Button, Icon, Left } from 'native-base';

import { StyledListSeparator, StyledListIcon } from '../../components';
import GameList from './components/GameList';
import TeamList from './components/TeamList';

@inject('userStore', 'gameStore') @observer
class SettingsScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render () {
    const game = this.props.gameStore;
    const user = this.props.userStore;

    return (
      <Container>
        <Content>
          <StyledListSeparator label='Rozgrywka' />
          <StyledListIcon iconName='gamepad' label='Aktualna rozgrywka' backgroundColor='#424756' noBorder={!game.id} onPress={() => this.props.navigation.navigate('GameSettings')}>
            {game.name ? null : <Text>Brak</Text>}
            <Icon active name='arrow-forward' />
          </StyledListIcon>
          {game.id ? <GameList /> : null}

          <StyledListSeparator label='Drużyna' />
          <StyledListIcon iconName='users' label='Twoja drużyna' backgroundColor='#4D784E'>
            <Text>Brak</Text>
            <Icon active name='arrow-forward' />
          </StyledListIcon>
          {user.team.id ? <TeamList /> : null}

        </Content>
      </Container>
    )
  }

}

export default SettingsScreen;
