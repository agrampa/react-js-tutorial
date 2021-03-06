import React from 'react'

import Title from './title.js'

export default class Title extends React.Component {
  handleChange(e) {
    const title = e.target.value
    this.props.changeTitle(title)
  }

  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </div>
    )
  }
}
