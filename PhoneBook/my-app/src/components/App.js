import React, { Component } from 'react';
import Contact from './Contact';
import '../App.css';

class App extends Component {
  constructor(){
    super();
    this.addContact = this.addContact.bind(this);
  }
  state = {
    contact: [{
      name: 'Kasim',
      phone: '0538'
    }, {
      name: 'Halit',
      phone: '0533'
    }, {
      name: 'Deniz',
      phone: '0543'
    },
    ]
  };
  addContact(param){
    const {contact} = this.state;
    contact.push(param);
    this.setState({
      contact:contact
    });
  }
  render() {
    return (
      <div className="App">
        <Contact addContact={this.addContact} contact={this.state.contact}/>
      </div>
    );
  }
}

export default App;
