import React from 'react'
import App from './app'
import ThemeContextProvider from './contexts/ThemeContext'
export default class Main extends React.Component {

  render() {
    return (
      <>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </>
    )
  }
}
