import React, { Component } from 'react';
import { MapView } from 'react-native-maps';
import { View } from 'react-native';
import { Container } from 'native-base';

export default class MapScreen extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Rozgrywka',
      };

    render() {
        return (
            <Container>
                
            </Container>
        )
    }
}