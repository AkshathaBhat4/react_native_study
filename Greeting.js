import React from 'react';
import { Text } from 'react-native';

export class Greeting extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}
