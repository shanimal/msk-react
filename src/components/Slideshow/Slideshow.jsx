import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './Slideshow.css';
import data from './data.js';

class Slideshow extends Component {
  constructor(props) {
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
  }
  render() {
    const currentIndex = this.state.index % data.length;
    return (
      <div className="Slideshow">
        <Link to={data[currentIndex].href}>
        {data.map((slide, index) => {
          return (
            <img
              src={slide.src}
              key={slide.src}
              className={`image ${index === currentIndex ? 'front' : 'back'}`}
            />
          );
        })}
        </Link>
      </div>
    );
  }
}

export default Slideshow;