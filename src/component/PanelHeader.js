import React from 'react';
import classNames from 'classnames';
import './PanelHeader.css';

export default class PanelHeader extends React.Component {
  render() {
    const emojiClasses = classNames(
      'game-button',
      {
        'game-button--default': this.props.emojiState === 'default',
        'game-button--exclaim': this.props.emojiState === 'exclaim',
        'game-button--dead': this.props.emojiState === 'dead'
      }
    );

    return (
      <div className="component-panel-header">
        <div className="input mines-amount">{this.props.options.mines.toString().padStart(3, 0)}</div>
        <button className={emojiClasses}></button>
        <div className="input">{this.props.timer.toString().padStart(3, 0)}</div>
      </div>
    );
  }
}
