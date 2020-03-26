import React, { Component } from 'react';
import {getRandomImage} from '../services/apiEndpoints'
import EntryCard from './EntryCard'

class EntryCardWrapper extends Component {
  constructor(props) {
    super(props)
    this.state ={
      img : null,
    }
  }

  componentDidMount() {
    getRandomImage().then(imgUrl => {
      console.log(imgUrl)
      this.setState({img: imgUrl })
    })
  }

  render() {
    return <EntryCard img={this.state.img} object={this.props.object} />
  }
}

export default EntryCardWrapper;