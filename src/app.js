import React from 'react'
import styles from './App.module.css'
import { Card, CountryPicker, Chart } from './components/index'
import { fetchData } from './api/index'
import {ThemeContext} from './contexts/ThemeContext'
import ToggleTheme from './components/ToggleTheme/ToggleTheme'

export default class App extends React.Component {
  static contextType = ThemeContext
  state = {
    data: {},
    country: '',
  }
  handleCountryChange = async (country) => {
    // console.log(country)
    const Data = await fetchData(country)
    // console.log(Data)
    this.setState({ data: Data, country })
    // console.log(this.state.data, this.state.country)
  }
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data })

  }
  render() {
    const { data, country } = this.state;
    // console.log(ThemeContext)
    const { isLightTheme, dark, light } = this.context;
    console.log(isLightTheme, dark, light)
    const theme = isLightTheme ? light : dark
    
    return (  
        <div className={styles.container} style={{ background: theme.bg }}>
          <ToggleTheme />
          <Card data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </div>
    )
  }
}
