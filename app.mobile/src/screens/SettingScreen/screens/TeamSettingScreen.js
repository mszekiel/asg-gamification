import React, { Component } from 'react';
import { Container, Content, Header } from 'native-base';
import StyledListItem from '../../../components/StyledListItem';
import StyledSeparator from '../../../components/StyledSeparator';

export default class TeamSettingScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Content>
                    <StyledSeparator text='Wybierz drużynę' />
                </Content>
            </Container>
        )
    }

}