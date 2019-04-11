import React, { PureComponent } from 'react';
import { ListItem, Left, Button, Icon, Body, Right, Text } from 'native-base';

export default class StyledListItemIcon extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ListItem icon onPress={this.props.onPress}>
                <Left>
                    <Button style={{ backgroundColor: this.props.backgroundColor }}>
                        <Icon active name={this.props.iconName} />
                    </Button>
                </Left>
                <Body>
                    <Text>{this.props.text}</Text>
                </Body>
                <Right>
                    {this.props.children}
                </Right>
            </ListItem>
        )
    }
}