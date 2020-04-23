import React, { useState, useEffect, useContext } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
import { ThemeContext } from "../../contexts/ThemeContext";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };
    console.log(country);
    fetchApi();
  }, [setDailyData]);
  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            backgroundColor: "rgba(0 ,0,255,.1)",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255 ,0,0,.3)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["infected ", "recovered", "deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0,0,255,.3)",
              "rgba(0,255,0,.3)",
              "rgba(255,0,0,.3)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, title: `Current state in ${country}` },
      }}
    />
  ) : null;
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: theme.bg,
        boxShadow: theme.boxShadow,
        color: theme.color,
      }}
    >
      {country ? barChart : lineChart}
    </div>
  );
};
export default Chart;
