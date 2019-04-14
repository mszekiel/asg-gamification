import React from 'react';
import { observer, inject } from 'mobx-react/native';
import { Content } from 'native-base';
import { StyledListSeparator, StyledListItem } from '../../../components';

@inject('userStore') @observer
class TeamList extends React.Component {
  render () {
    const team = this.props.userStore.team;

    return (
      <Content>
        <StyledListItem label='Punkty' value={team.points} />
        <StyledListItem label='Ilość członków' value={team.buddies} />
      </Content>
    );
  }
}

export default TeamList;
