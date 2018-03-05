/**
 * Created by Dell on 2018/3/5.
 */
import React, {Component} from 'react';
import {Carousel} from 'antd-mobile';
import './Carousels.css';
class Carousels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
      slideIndex: 0,
    };
  }

  componentDidMount() {
  };

  render() {
    return (
      <Carousel
        infinite
        autoplay
        selectedIndex={1}
      >
        {this.state.data.map(val => (
          <a
            key={val}
            style={{display: 'inline-block', width: '100%', height: this.state.imgHeight}}
          >
            <img
              src={require(`../static/img/${val}.jpg`)}
              alt=""
              style={{width: '100%', verticalAlign: 'top'}}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({imgHeight: 'auto'});
              }}
            />
          </a>
        ))}
      </Carousel>

    );
  }
}

export default Carousels;
