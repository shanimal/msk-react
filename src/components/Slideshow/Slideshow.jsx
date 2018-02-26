import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './Slideshow.css';
import data from './data.js';

class Slideshow extends Component {
  constructor(props) {
    console.log('DATA');
    super(props);
    this.state = {
      index: 0
    };
    this.setNextImage = this.setNextImage.bind(this);
  }
  componentDidMount() {
    setInterval(this.setNextImage, 8000);
  }
  setNextImage() {
    const index = this.state.index+1;
    this.setState({
      index,
    });
    console.log('setNextImage', this.state.index)
  }
  render() {
    const currentIndex = this.state.index % data.length;
    return (
      <div className="Slideshow">
        <Link to={data[currentIndex].href}>
        {data.map((slide, index) => {
          return (
            <div
              className={`image ${index === currentIndex ? 'front' : 'back'}`}
              style={{backgroundImage: `url(${slide.src})`}}
            />
          );
        })}
        </Link>
      </div>
    );
  }
}

export default Slideshow;