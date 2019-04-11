import React, { PureComponent } from 'react';
import { Separator, Text } from 'native-base';

const StyledSeparator = (props) => <Separator bordered><Text>{props.text}</Text></Separator>

export default StyledSeparator;
