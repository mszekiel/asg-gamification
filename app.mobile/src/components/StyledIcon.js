import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const StyledIcon = (props) => <FontAwesome color={props.color || 'white'} size={props.size || 21} name={props.name} />

export default StyledIcon;
