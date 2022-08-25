import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { FC } from "react";
import { DailyForecast } from "../../types/WeatherTypes";
import WeatherItem from "./WeatherItem";

interface CompactDisplayProps {
  /**
   * The forecast to display and describe.
   */
  dailyForecast: DailyForecast;
}

/**
 * A box component that is used to display the date of forecast and
 * it's subsequent forecasts for the day and night.
 */
const CompactDisplay: FC<CompactDisplayProps> = ({ dailyForecast }) => {
  const { Day, Night, Date, Temperature } = dailyForecast;

  const boxStyle = {
    width: "360px",
    flexShrink: 0,
    m: 2,
    p: 4,
    backgroundColor: "#fff",
    borderRadius: "15px",
  };

  const formattedDate = moment(Date).format("dddd MMM Do YYYY");

  const temperatureRange = `${Temperature.Minimum.Value}°${Temperature.Minimum.Unit} to ${Temperature.Maximum.Value}°${Temperature.Maximum.Unit}`;

  return (
    <Box sx={boxStyle}>
      <Typography variant="h5" sx={{ textAlign: "center", pb: 2 }}>
        {formattedDate}
      </Typography>
      <Typography variant="h6" sx={{ textAlign: "center", pb: 2 }}>
        {temperatureRange}
      </Typography>
      <Grid container>
        <WeatherItem
          weatherDescription={Day.IconPhrase}
          iconNumber={Day.Icon}
          isDay
        />
        <Divider
          orientation="vertical"
          flexItem
          style={{ marginRight: "-1px" }}
        />
        <WeatherItem
          weatherDescription={Night.IconPhrase}
          iconNumber={Night.Icon}
        />
      </Grid>
    </Box>
  );
};

export default CompactDisplay;
