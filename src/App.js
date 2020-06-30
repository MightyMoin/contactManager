import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Contacts from './components/contacts/Contacts';
import Header from './components/Layout/Header';
import Sidenav from './components/Layout/Sidenav';
import About from './components/pages/About';
import Error from './components/pages/Error';
import { Provider } from './context';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App text-center">
          <Header brand="Contact Manager"></Header>
          <Sidenav />
          <Switch>
            <Route exact path="/" component={Contacts}></Route>
            <Route exact path="/contacts/add" component={AddContact}></Route>
            <Route exact path="/contacts/edit/:id" component={EditContact}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route component={Error}></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
