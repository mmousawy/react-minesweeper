import React from 'react';
import Tile from './Tile';
import './Field.css';
import PropTypes from 'prop-types';

export default class Field extends React.Component {
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
    const rows = [];

    for (let y = 0; y < this.props.options.field[1]; y++) {
      rows[y] = [];

      for (let x = 0; x < this.props.options.field[0]; x++) {
        rows[y].push(<Tile key={y*x+x} index={y*x+x} mouseDownHandler={this.handleMouseDown} mouseUpHandler={this.handleMouseUp}></Tile>);
      }
    }

    return (
      <div className="component-field">
        {rows.map((row, index) => <div key={index}>{row}</div>)}
      </div>
    );
  }
}
