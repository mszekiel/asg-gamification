import React from 'react';
import { observer, inject } from 'mobx-react/native';
import { Content } from 'native-base';

import { StyledListSeparator, StyledListItem } from '../../../components';
import StyledListClock from './StyledListClock';

@inject('gameStore') @observer
class GameList extends React.Component {
  render () {
    const game = this.props.gameStore;
    return (
      <Content>
        <StyledListItem label='Nazwa' value={game.name} />
        <StyledListClock label='Czas trwania' startTime={game.startTime} />
        <StyledListItem label='Graczy' value={game.players} />
      </Content>
    );
  }
};

export default GameList;
