import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './update-form.css'
import {Link} from 'react-router-dom'

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length > 20) {
    errors.name = 'Must be 20 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.phone) {
    errors.phone = 'Required'
  } 
  
  
  return errors
}


const renderField = ({ input, type, meta: { touched, error } }) => (
  <div>
 
    <div className="form-group">
      <input {...input} type={type} className="form-control"/>
      {touched && (error && <span className='val'>{error}</span>) }
    </div>
  </div>
)

class UpdateForm extends Component {
  render() {
    const { handleSubmit,  pristine, reset, submitting, add} = this.props;
    console.log(add);
    return (
      <form onSubmit={handleSubmit} className="update-form container">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <Field name="name" component={renderField} type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <Field name="username" component="input" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Field name="email" component={renderField} type="email" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <Field name="phone" component={renderField} type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <Field name="website" component="input" type="text" className="form-control"/>
        </div>
          {
            (add)
              ? <div className='d-flex justify-content-between'>
                  <div>
                    <button type="submit" className='btn btn-primary'>Add user</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset} className='btn btn-secondary'>Clear Values</button>
                  </div>
                  <Link to='/'>
                    <button type="button" className='btn btn-primary'>Cancel</button>
                  </Link>
                </div>
              : <div className="d-flex justify-content-between">
                  <button type="submit" className='btn btn-primary'>Change user</button>
                  <Link to='/'>
                    <button type="button" className='btn btn-outline-danger'>Cancel</button>
                  </Link>
                </div>
              
              
          }
          {/* <button type="submit" className='btn btn-primary'>Change user</button> */}
          {/* <button type="button" disabled={pristine || submitting} onClick={reset} className='btn btn-secondary'>Clear Values</button> */}
      </form>
    );
  }
}

UpdateForm = reduxForm({
  form: 'update', // a unique name for this form
  validate
})(UpdateForm);



export default UpdateForm;