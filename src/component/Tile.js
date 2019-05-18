import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import './Tile.css';

class Tile extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
    mouseDownHandler: PropTypes.func,
    mouseUpHandler: PropTypes.func
  };

  handleMouseDown = () => {
    this.props.mouseDownHandler(this.props.index);
  };

  handleMouseUp = () => {
    this.props.mouseUpHandler(this.props.index);
  };

  handleClick = () => {
    this.props.clickHandler(this.props.index);
  };

  render() {
    console.log('rendering tile');

    return (
      <button onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp}>{this.props.defaultValue}</button>
    )
  };
}

export default pure(Tile);
