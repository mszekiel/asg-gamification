import React from 'react';
import { observer, inject } from 'mobx-react/native';
import { Text, ListItem, Left, Right, List } from 'native-base';

@inject('gameStore') @observer
class StyledListClock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      timeElapsed: 0,
    }
  }

  componentDidMount () {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount () {
    clearInterval(this.intervalID);
  }


  tick = () => {
    const elapsedTime = new Date() - this.props.startTime;
    this.setState({
      timeElapsed: elapsedTime
    });
  }

  render () {
    const game = this.props.gameStore;
    if (game.active) {
      return (
        < ListItem last={this.props.last}>
          <Left>
            <Text>{this.props.label}</Text>
          </Left>
          <Text>{new Date(this.state.timeElapsed).toISOString().substr(11, 8)}</Text>
        </ListItem >
      )
    } else {
      return (
        < ListItem last={this.props.last}>
          <Left>
            <Text>{this.props.label}</Text>
          </Left>
          <Text >Wstrzymana</Text>
        </ListItem >
      );
    }
  }

}


export default StyledListClock;
