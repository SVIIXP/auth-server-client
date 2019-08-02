import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from 'actions'
import { compose } from 'redux'
import {connect} from 'react-redux'

class Signin extends Component {

  onSubmit = (formProps) => {
    this.props.signIn(formProps, () => {
      this.props.history.push('/feature')
    }
    )
    
  }

  render() {
    
    const { handleSubmit, errorMessage } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        {errorMessage ? <div><p style={{color: "red"}}>{errorMessage}</p></div>: null}
        <fieldset>
          <label>Email: </label>
          <Field 
            name='email'
            type='text'
            component='input'
          />
        </fieldset>
        <fieldset>
          <label>Password: </label>
          <Field 
            name='password'
            type='password'
            component='input'
          />
        </fieldset>
        <button type='submit' >Sign In</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  const { errorMessage } = state.auth
  return {
    errorMessage 
  }

}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({form: 'signin'})
)(Signin)
