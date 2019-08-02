import React, { Component } from 'react'
import { connect } from 'react-redux'

export default (ChildComponent) => {
  // eslint-disable-next-line react/prefer-stateless-function
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway()
    }

    componentDidUpdate(prevProps, prevState) {
      this.shouldNavigateAway()
    }

    shouldNavigateAway() {
      const { auth, history } = this.props
      return auth ? null : history.push('/')
    }

    render() {
      return (
        <ChildComponent {...this.props} />
      )
    }
  }
  const mapStateToProps = state => ({
    auth: state.auth.authenticated,
  })

  return connect(mapStateToProps)(ComposedComponent)

}
