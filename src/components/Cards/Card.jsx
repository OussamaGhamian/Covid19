import React, { useContext } from "react";
import styles from "./Card.module.css";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import { ThemeContext } from "./../../contexts/ThemeContext";
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  if (!confirmed) return "Loading...";
  return (
    <div
      className={styles.container}
      style={{ background: theme.bg, boxShadow: theme.boxShadow }}
    >
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={10}
          md={3}
          className={cx(styles.card, styles.infected)}
          style={{
            background: theme.bg,
            boxShadow: theme.boxShadow,
            color: theme.color,
          }}
        >
          <CardContent>
            <Typography gutterBottom>Infected</Typography>
            <Typography variant="h5" style={{ color: "blue" }}>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2"># active cases of Covid-19</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={10}
          md={3}
          className={cx(styles.card, styles.recovered)}
          style={{
            background: theme.bg,
            boxShadow: theme.boxShadow,
            color: theme.color,
          }}
        >
          <CardContent>
            <Typography gutterBottom>Recovered</Typography>
            <Typography variant="h5" style={{ color: "green" }}>
              <CountUp
                start={0}
                end={recovered.value}
                duration={3}
                separator=","
              />
            </Typography>{" "}
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2"># recoveries from Covid-19</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={10}
          md={3}
          className={cx(styles.death, styles.card)}
          style={{
            background: theme.bg,
            boxShadow: theme.boxShadow,
            color: theme.color,
          }}
        >
          <CardContent>
            <Typography gutterBottom>Deaths</Typography>
            <Typography variant="h5" style={{ color: "red" }}>
              <CountUp
                start={0}
                end={deaths.value}
                duration={3}
                separator=","
              />
            </Typography>{" "}
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2"># deaths caused by Covid19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
