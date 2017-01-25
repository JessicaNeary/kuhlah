import React from 'react'

import Button from './Button'

const ColorPicker = React.createClass({
  getInitialState() {
    return {value: '#bcf442'}
  },
  onChange (event) {
    const value = event.target.value
    this.setState({value})
  },
  onSubmit (event) {
    event.preventDefault()
    const color = this.state.value
    this.props.onPostColor(color)
  },
  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="color" onChange={this.onChange} value={this.state.value}/>
        <Button type="submit" text='Add new color' />
      </form>
    )
  }
})

export default ColorPicker
