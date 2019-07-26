import React, {Component} from 'react'

import { connect } from 'react-redux';
import UpdateForm from '../update-form/update-form'
import { changeUserValues, addUser } from '../../actions/index'
import {withRouter} from 'react-router'

import swal from 'sweetalert';

class UpdatePage extends Component {

  updUserId = null

  handleSubmit = (values) => {
    // Do something with the form values
    if (this.props.updatedUserValues) {
      this.props.changeUserValues(values, this.updUserId)
      swal("Good job!", "You've updated user information", "success");
      this.props.history.push('/');
    } else {
      this.props.addUser(values)
      swal("Good job!", `You've added user ${values.name}`, "success");
      this.props.history.push('/');
    }

  }
  
  

  render() {
    if (this.props.updatedUserValues) {
      console.log("updatedUserValues");
      const { updatedUserValues: {email, name, phone, username,
        website, id} } = this.props;
      const initialValues = {
        name, email, phone, username, website
      }
      this.updUserId = id
      return (
        <UpdateForm onSubmit={this.handleSubmit} initialValues={initialValues} add={false}/>
      )
    } else {
      console.log('AAAAA');
      return <UpdateForm onSubmit={this.handleSubmit} add={true}/>
    }
    
    
    
  }
}

const mapStateToProps = ( {user: {updatedUserValues} } ) => {
  return { updatedUserValues }
};

const mapDispatchToProps = {
  changeUserValues,
  addUser
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdatePage));