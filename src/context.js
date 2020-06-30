import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  if (action.type === 'DELETE_CONTACT') {
    return {
      ...state,
      contacts: state.contacts.filter(
        (contact) => contact.id !== action.payload
      ),
    };
  } else if (action.type === 'ADD_CONTACT') {
    return {
      ...state,
      contacts: [action.payload, ...state.contacts],
    };
  } else if (action.type === 'UPDATE_CONTACT') {
    return {
      ...state,
      contacts: state.contacts.map((contact) =>
        action.payload.id === contact.id ? (contact = action.payload) : contact
      ),
    };
  } else return state;
};

export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };
  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    this.setState({ contacts: res.data });
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
