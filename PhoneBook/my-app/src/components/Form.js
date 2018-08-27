import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  static propTypes = {
    addContact: PropTypes.func
  };

  state = {
    name: "",
    phone: ""
  };
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit(e){
    e.preventDefault();
    this.props.addContact({
        ...this.state
    });
    this.setState({ name: "", phone: "" });
  }
  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <input
          name="name"
          onChange={this.onChange}
          value={this.state.name}
          placeholder={"Name"}
        />
        <input
          tpe="number"
          onChange={this.onChange}
          value={this.state.phone}
          name="phone"
          placeholder={"Phone"}
        />
        <button>Add</button>
        </form>
      </div>
    );
  }
}

export default Form;