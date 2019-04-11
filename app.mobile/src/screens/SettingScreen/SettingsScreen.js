import React from 'react';
import { Container, Header, Content, Title, ListItem, Left, Button, Icon, Right, Switch, Body, Text, Separator } from 'native-base';
import StyledListItemIcon from '../../components/StyledListItemIcon';
import StyledSeparator from '../../components/StyledSeparator';
import StyledListItem from '../../components/StyledListItem';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Ustawienia rozgrywki',
  };

  render() {
    return (
      <Container>
        <Content>
          <StyledSeparator text='Ustawienia drużyny' />
          <StyledListItemIcon backgroundColor='#4d784e' iconName='people' text='Twoja drużyna' onPress={() => this.props.navigation.navigate('TeamSettingScreen')}>
            <Text>Kapitan Bomba</Text>
            <Icon active name='arrow-forward' />
          </StyledListItemIcon>

          {/* <StyledListItem text='Pełna nazwa' value='Kapitan Bomba'/> */}
          <StyledListItem text='Ilość członków' value='21' />
          <StyledListItem noBorder text='Administrator' value='Twoj Stary' />



          <StyledSeparator text='Ustawienia gry' />
          <StyledListItemIcon backgroundColor='#424756' iconName='logo-game-controller-b' text='Rogrywka' onPress={() => this.props.navigation.navigate('GameSettingScreen')}>
            <Text>Brak</Text>
            <Icon active name='arrow-forward' />
          </StyledListItemIcon>

          <StyledListItem text='Nazwa' value='Super Operacja' />
          <StyledListItem text='Czas trwania' value='01:21:37' />
          <StyledListItem text='Ilość uczestników' value='24' />


        </Content>
      </Container>
    );
  }
}
