import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import { FC } from "react";
import getIconUrl from "../../scripts/getIconUrl";

interface WeatherItemProps {
  /**
   * used to describe the weather
   */
  weatherDescription: string;

  /**
   * used to determine which icon to display for the weatherItem
   */
  iconNumber: number;

  /**
   * used to determine what time of day it is.
   */
  isDay?: boolean;
}

/**
 * A component that describes the weather by intensity and precipitation type
 * that also displays it's icon and wether it's for the morning or evening.
 */
const WeatherItem: FC<WeatherItemProps> = ({
  iconNumber,
  weatherDescription,
  isDay,
}) => {
  const sourceFile = getIconUrl(iconNumber);

  const weatherDetail = `${weatherDescription} ${
    isDay ? "in the Morning" : "in the Evening"
  }`;

  const gridStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    p: 2,
  };

  return (
    <Grid xs={6} sx={gridStyle}>
      <img src={sourceFile} alt={weatherDetail} />
      <Typography>{weatherDetail}</Typography>
    </Grid>
  );
};

export default WeatherItem;
