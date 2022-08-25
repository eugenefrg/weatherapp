import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { FC } from "react";
import getIconUrl from "../../scripts/getIconUrl";
import { getTimeOfDay } from "../../scripts/getTimeOfDay";
import { TimeOfDayColors } from "../../scripts/timeOfDayColors";
import { DailyForecast, TemperatureValue } from "../../types/WeatherTypes";

interface MainDisplayProps {
  /**
   * The name of the location.
   */
  locationName?: string;

  /**
   * The current date to display on the upper part of the screen.
   */
  date: string;

  /**
   * The forecast data provided. This is usually the first forecast item
   * that represents the current day.
   */
  forecast: DailyForecast;
}

const MainDisplay: FC<MainDisplayProps> = ({
  locationName = "Philippines",
  date,
  forecast,
}) => {
  const { Temperature, Day, Night } = forecast;

  const temperatureRange = `${Temperature.Minimum.Value}°${Temperature.Minimum.Unit} to ${Temperature.Maximum.Value}°${Temperature.Maximum.Unit}`;

  // Check the current time if it's Day or Night.
  const isDay = getTimeOfDay(moment().toString()) === TimeOfDayColors.day;

  const currentHalfOfDay = isDay ? Day : Night;

  // Describe the weather.
  const weatherDescription = `${currentHalfOfDay.IconPhrase}`;

  const iconNumber = currentHalfOfDay.Icon;

  const sourceFile = getIconUrl(iconNumber);

  return (
    <>
      <Box
        sx={{
          h: 1,
          py: 8,
        }}
      >
        <Typography variant="h3" gutterBottom>
          {locationName}
        </Typography>
      </Box>
      <Box sx={{ width: 1 / 2, h: 1, pl: 4 }}>
        <img src={sourceFile} alt={weatherDescription} />
        <Typography variant="h5">{temperatureRange}</Typography>
        <Typography variant="h5">{weatherDescription}</Typography>
        <Typography variant="h5">{date}</Typography>
      </Box>
    </>
  );
};

export default MainDisplay;
