import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Form from "./Form";


const Contact = props => 
    <div>
     <List contact={props.contact} />
     <Form addContact={props.addContact} />
    </div>;
Contact.propTypes={
    contact: PropTypes.array.isRequired,
    addContact: PropTypes.func,
}
export default Contact; 