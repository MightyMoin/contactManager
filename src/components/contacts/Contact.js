import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/contact.css';
import { Consumer } from '../../context';
import Axios from 'axios';

class Contact extends Component {
  state = {
    show: false,
  };
  onDeleteClick = async (id, dispatch) => {
    try {
      await Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (error) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };
  render() {
    const { id, name, phone, email } = this.props.contact;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body text-left" style={{ width: '50%' }}>
              <h4>
                {name}
                <i
                  className="fas fa-caret-down"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    this.setState({ show: !this.state.show });
                  }}
                ></i>
                <i
                  className="fas fa-times text-danger"
                  style={{ cursor: 'pointer', float: 'right' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                ></i>
                <Link to={`/contacts/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt text-info mr-3 mt-1"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      fontSize: '17px',
                    }}
                  ></i>
                </Link>
              </h4>
              {this.state.show ? (
                <ul className="list-group detail">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone} </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
