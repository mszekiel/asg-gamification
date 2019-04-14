import React from 'react';
import { Separator, Text, ListItem } from 'native-base';

const StyledListSeparator = (props) => <ListItem itemDivider ><Text>{props.label}</Text></ListItem>;

export default StyledListSeparator;
