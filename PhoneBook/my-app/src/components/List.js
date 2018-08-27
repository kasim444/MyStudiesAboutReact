import React from 'react';
import PropTypes from 'prop-types';
import './List.css';
class List extends React.Component {
    static propTypes = {
        contact : PropTypes.array.isRequired,
    }
    state={
        filterText: '',
    }
    
    onChange = (e) => {
        this.setState({
            filterText: e.target.value
        });
    }
    render(){
        const filteredContact = this.props.contact.filter(cont => {
            return cont.name.toLowerCase().indexOf(
                this.state.filterText.toLocaleLowerCase()
            ) !== -1
        });
        return <div className="ListArea">
            <input
            value={this.state.filterText}
            onChange={this.onChange}
            name={"filter"} 
            id={"filter"} 
            placeholder={"Filter by name or phone"} />

            <ul className={"list"}>
            {
                filteredContact.map(contact =>
                    <li className={"list"} key={contact.phone}>
                     <span className={"name"}>{contact.name}</span>
                     <span className={"phone"}>{contact.phone}</span>
                     <span className={"clear"}></span>
                    </li>
                )
            }
            </ul>
          </div>;
    }
}
export default List;