import React, { Component } from 'react';
import '../App.css';
class App extends Component {
  state={
    films:[],
    isLoading:true,
  };
  componentDidMount(){
    setTimeout(()=>{
      fetch("https://ghibliapi.herokuapp.com/films")
        .then(data => data.json())
        .then(films => {
          this.setState({
            films: films,
            isLoading: false
          });
        })
    },222)
  }
  render() {
    const { isLoading } = this.state;
    return (
      <div className="App">
        <img className="logo" src={require("../assets/img/ghibli_logo_gold.png")} alt="" />
        <br />
        {isLoading ? <div class="ring-1"></div> : ""}
        {this.state.films.map(film => <div className="card" key={film.id}>
        <h4> {film.title} </h4>
        <p> {`${film.description.substring(0, 222)}...`} </p>
        </div>)}
      </div>
    );
  }
}
export default App;
