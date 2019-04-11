import React from 'react';
import { ListItem, Left, Right, Text } from 'native-base';

const StyledListItem = (props) => (
    <ListItem noBorder={props.noBorder}>
        <Left>
            <Text>{props.text}</Text>
        </Left>
        <Text>{props.value}</Text>
    </ListItem>
)

export default StyledListItem;