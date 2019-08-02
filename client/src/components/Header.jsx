import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import 'components/HeaderStyle.css'

class Header extends Component {

  renderLinks() {
    const { authenticated } = this.props
    if (authenticated) {
      return (
        <div>
          <Link to='/signout'>Sign Out</Link>
          <Link to='/feature'>Feature</Link>
        </div>
      )
    } else {
      return (
        <div>
          <Link to='/signin'>Sign In</Link>
          <Link to='/signup' >Sign Up</Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div className={"header"}>
        <Link to='/'>Redux Auth</Link>
        {this.renderLinks()}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  const { authenticated } = state.auth
  return { 
    authenticated
  }
}


export default connect(mapStateToProps)(Header)