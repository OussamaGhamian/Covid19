import React from 'react'
import styles from './App.module.css'
import { Card, CountryPicker, Chart } from './components/index'
import { fetchData } from './api/index'

export default class App extends React.Component {
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
    return (
      <div className={styles.container}>
        <Card data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}