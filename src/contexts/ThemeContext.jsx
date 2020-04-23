import React, { Component, createContext } from "react";
export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
  state = {
    isLightTheme: false,
    light: {
      color: "black",
      bg: "#b1babf",
      boxShadow: "20px 20px 60px #969ea2,-20px -20px 60px #ccd6dc",
    },
    dark: {
      color: "grey",
      bg: "#14262f",
      boxShadow: "inset 20px 20px 60px #112028, inset -20px -20px 60px #172c36",
    },
  };
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
