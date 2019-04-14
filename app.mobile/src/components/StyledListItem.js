import React from 'react';
import { ListItem, Text, Left, Right } from 'native-base';

const StyledListItem = (props) => (
  <ListItem>
    <Left>
      <Text>{props.label}</Text>
    </Left>
    <Text>{props.value}</Text>
  </ListItem>
);

export default StyledListItem;
