import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
const configDarkTheme = {
  darkColor: "black",
  text_color: "white",
};

const configLightTheme = {
  lightColor: "red",
  text_color: "black",
};

class DemoTheme extends Component {
  state = {
    currentTheme: configDarkTheme,
  };
  changeTheme = (e) => {
    console.log(e.target.value);
    e.target.value === "1"
      ? this.setState({ currentTheme: configDarkTheme })
      : this.setState({ currentTheme: configLightTheme });
  };

  render() {
    const DivStyle = styled.div`
      background-color: ${(props) => props.theme.darkColor};
      color: ${(props) => props.theme.text_color};
    `;

    return (
      <ThemeProvider theme={this.state.currentTheme}>
        <DivStyle>hello</DivStyle>
        <select onChange={(e) => this.changeTheme(e)}>
          <option value="1">Dark Mode</option>
          <option value="2">Light Mode</option>
        </select>
      </ThemeProvider>
    );
  }
}

export default DemoTheme;
