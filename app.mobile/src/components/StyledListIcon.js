import React from 'react'
import { ListItem, Button, Icon, Body, Text, Left, Right } from 'native-base';
import StyledIcon from './StyledIcon';

const StyledListIcon = (props) => (
  <ListItem icon noBorder={props.noBorder} onPress={props.onPress}>
    <Left>
      <Button style={{ backgroundColor: props.backgroundColor }}>
        <StyledIcon active name={props.iconName} ios={`ios-${props.iconName}`} android={`md-${props.iconName}`} />
      </Button>
    </Left>

    <Body>
      <Text>{props.label}</Text>
    </Body>

    <Right>
      {props.children}
    </Right>
  </ListItem>
);

export default StyledListIcon;
