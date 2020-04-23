import React, { Component } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./ToggleTheme.css";
export default class ToggleTheme extends Component {
  static contextType = ThemeContext;

  render() {
    const { toggleTheme } = this.context;
    return (
      <div class="toggle-btn" id="_1st-toggle-btn">
        <input type="checkbox" onClick={toggleTheme} />
        <span></span>
      </div>
    );
  }
}
