import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { Header } from 'react-navigation';

export default class LoginScreen extends Component {
    constructor (props) {
        super(props)
        
    }

    render () {
        return (
            <Container>
                <Content>
                <Header/>

                </Content>
            </Container>
        )
    }
    
}