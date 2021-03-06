import React from 'react';
import { Icon } from 'expo';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        color = "white"
        size={this.props.size}
        style={{ marginBottom: -3 }}
      />
    );
  }
}
