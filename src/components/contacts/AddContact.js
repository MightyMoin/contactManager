import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../Layout/TextInputGrp';
import Axios from 'axios';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  };

  submitForm = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === '') {
      this.setState({
        errors: { name: 'Name is required' },
      });
      return;
    }
    if (email === '') {
      this.setState({
        errors: { email: 'Email is required' },
      });
      return;
    }
    if (phone === '') {
      this.setState({
        errors: { phone: 'Phone is required' },
      });
      return;
    }

    const newContact = {
      name,
      email,
      phone,
    };

    const res = await Axios.post(
      'https://jsonplaceholder.typicode.com/users',
      newContact
    );
    dispatch({
      type: 'ADD_CONTACT',
      payload: res.data,
    });

    // clearing the input boxes after input
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {},
    });

    this.props.history.push('/');
  };

  onType = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div
              className="card mt-3 t"
              style={{
                width: '50%',
                left: '25%',
                border: '0.5px solid #4f8a8b',
              }}
            >
              <div
                className="card-header text-dark"
                style={{
                  backgroundColor: '#fbd46d',
                  borderBottom: '1px solid #4f8a8b',
                }}
              >
                Add Contact
              </div>
              <div
                className="card-body text-left"
                style={{ width: '80%', left: '10%' }}
              >
                <form onSubmit={this.submitForm.bind(this, dispatch)}>
                  <TextInputGroup
                    type="text"
                    name="name"
                    lable="Name:"
                    value={name}
                    onChange={this.onType}
                    error={errors.name}
                  />
                  <TextInputGroup
                    type="email"
                    lable="Email:"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={this.onType}
                    error={errors.email}
                  />
                  <TextInputGroup
                    type="text"
                    name="phone"
                    lable="Phone:"
                    value={phone}
                    onChange={this.onType}
                    error={errors.phone}
                  />
                  <div className="text-center">
                    <input
                      type="submit"
                      value="Add Contact"
                      className="btn btn-dark"
                    />
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
