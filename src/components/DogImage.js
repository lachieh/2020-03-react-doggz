import React, { Component } from 'react'

export default class DogImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: ''
    }
  }

  getNewDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => {
        console.log('fetched Image and update state');
        this.setState({ imageUrl: data.message });
      })
  }

  componentDidMount() {
    console.log('Mounted the DogImage');
    this.getNewDog();
  }

  handleClick = () => {
    this.getNewDog();
  }

  render() {
    console.log('Rendering DogImage');
    return (
      <div onClick={this.handleClick}>
        <img width="300" src={ this.state.imageUrl } alt="" />
      </div>
    )
  }
}
