import React from 'react';
import PanelHeader from './PanelHeader';
import Field from './Field';
import './App.css';

export default class App extends React.Component {
  state = {
    playing: true,
    difficulty: 'beginner',
    difficulties: {
      beginner: {
        field: [8, 8],
        mines: 10
      },
      intermediate: {
        field: [16, 16],
        mines: 40
      },
      expert: {
        field: [30, 15],
        mines: 99
      }
    },
    timer: 0,
    emojiState: 'default'
  };

  handleMouseDown = () => {
    this.setState({
      emojiState: 'exclaim'
    });
  };

  handleMouseUp = () => {
    this.setState({
      emojiState: 'default'
    });
  };

  handleClick = buttonName => {

  };

  render() {
    return (
      <div className="App" onMouseUp={this.handleMouseUp}>
        <main>
          <PanelHeader options={this.state.difficulties[this.state.difficulty]} timer={this.state.timer} emojiState={this.state.emojiState}></PanelHeader>
          <Field options={this.state.difficulties[this.state.difficulty]} mouseDownHandler={this.handleMouseDown} mouseUpHandler={this.handleMouseUp}></Field>
        </main>
      </div>
    );
  }
}
