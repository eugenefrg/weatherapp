import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MainDisplay from "./components/MainDisplay";
import CompactDisplay from "./components/CompactDisplay";
import moment from "moment";
import { CircularProgress } from "@mui/material";
import useForecasts from "./hooks/useForecasts";
import { useEffect } from "react";
import useIpLocation from "./hooks/useIpLocation";

function App() {
  // fetch data from API
  const apiKey = process.env.REACT_APP_ACCUWEATHER_API_KEY;
  const { data: location } = useIpLocation(apiKey);
  const { forecast, data } = useForecasts(apiKey);

  const topGridStyle = {
    height: 1 / 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    px: 4,
  };

  const mainDisplayBoxStyle = {
    backgroundColor: "#fff",
    p: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: "15px",
  };

  const compactDisplayGridStyle = {
    height: 1 / 2,
    overflowX: "auto",
    overflowY: "hidden",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    pt: 4,
  };

  useEffect(() => {
    if (!data) {
      // if location cannot be found, use Quezon City key.
      forecast(location?.Key || 1707150);
    }
  });

  return (
    <div className="App">
      {data ? (
        <Grid
          container
          sx={{ height: 1, backgroundColor: "#5eb3ff" }}
          justifyContent="center"
        >
          <Grid item sx={topGridStyle}>
            <Box sx={mainDisplayBoxStyle}>
              <MainDisplay
                locationName={location?.LocalizedName}
                date={moment(data?.Headline.EffectiveDate).format(
                  "dddd MMM Do YYYY"
                )}
                forecast={data.DailyForecasts[0]}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sx={compactDisplayGridStyle}>
            {data?.DailyForecasts.map((dailyForecast: any) => (
              <CompactDisplay dailyForecast={dailyForecast} />
            ))}
          </Grid>
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

export default App;
