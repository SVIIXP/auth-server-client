import React, { Component } from 'react'
import Header from 'components/Header'
import {Route} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={Header} />
        {this.props.children}
      </div>
    )
  }
}
