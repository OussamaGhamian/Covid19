import React, { useState, useEffect, useContext } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";
import { ThemeContext } from "../../contexts/ThemeContext";
const CounrtyPicker = ({ handleCountryChange }) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchCountries1 = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchCountries1();
  }, [setFetchedCountries]);
  // console.log(fetchedCountries);
  return (
    <FormControl
      className={styles.formControl}
      style={{ backgroundColor: theme.bg, boxShadow: theme.boxShadow }}
    >
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
        className={styles.select}
        style={{ color: theme.color }}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option value={country} key={i}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
export default CounrtyPicker;
