import React from 'react';

export class Link extends React.Component {
  render() {
    const { address, hide } = this.props;

    return hide ? null : <a href={address}>Link</a>;
  }
}
