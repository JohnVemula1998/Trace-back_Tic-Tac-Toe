import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div>
        <button className="button" onClick={this.props.changeAppState}>
          {this.props.value}
        </button>
      </div>
    );
  }
}
