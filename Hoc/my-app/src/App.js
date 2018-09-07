import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Posts from './components/Posts';
class App extends Component {
  state={
    posts:[],
    isLoading:true
  }
  componentWillMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(posts => posts.data )
    .then(posts => {
      setTimeout(() => {
        this.setState({
          posts,
          isLoading:false
        });
      }, 2000);
    })
  }
  render(){
    return <div>
          <div>
            <Posts {...this.state} />
          </div>
      </div>;
  }
}
export default App;
