import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <div
                className="display-4 mb-2"
                style={{ width: '50%', position: 'relative', left: '25%' }}
              >
                <h1>
                  <span className="text-danger">My </span> Contacts
                </h1>
              </div>
              {contacts.map((contact) => (
                <Contact key={contact.key} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
