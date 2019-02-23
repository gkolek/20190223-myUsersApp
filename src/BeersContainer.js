import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BeersContainer extends Component {

  state = {
    beers: []
  }

  removeBeer = (beerId) => {
    const url = `https://beers-bunkier.firebaseapp.com/api/v1/beers/${beerId}`;
    fetch(url, {
      method: 'DELETE'
    })
    .then(response => {
      this.fetchBeers();
    });
  }

  handleRemove = (beerId) => {
    this.removeBeer(beerId);
  }

  fetchBeers() {
    fetch('https://beers-bunkier.firebaseapp.com/api/v1/beers/')
    .then(response => {
      console.log(response.status);
      return response.json();
    })
    .then(data => {
      const beersArray = [];
      Object.entries(data.beers).forEach(elem => {
        const newBeer = {
          id: elem[0],
          ...elem[1]
        }
        beersArray.push(newBeer);
      });
      this.setState({ beers: beersArray });
    });
  }

  componentDidMount() {
    this.fetchBeers();
  }

  render() {
    return(
      <div>
        <h1>My beers:</h1>
        {this.state.beers.map(beer => {
          return (
            <p key={`beer-${beer.id}`}>
              {beer.name} <Link to={`/update/${beer.id}`}>Edit</Link>
              <button onClick={() => this.handleRemove(beer.id)}>Remove</button>
            </p>
          );
        })}
      </div>
    );
  }

}

export default BeersContainer;