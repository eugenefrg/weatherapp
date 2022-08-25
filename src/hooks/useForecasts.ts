import { useCallback, useState } from "react";
import { ForecastData } from "../types/WeatherTypes";

/**
 * A hook that returns an executable function `forecast`
 * which fetches the forecast data and returns it in the
 * `data` returned.
 */
export default function useForecasts(apiKey?: string) {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState<ForecastData>();
  const [error, setError] = useState(null);

  const forecast = useCallback(
    (areaCode: number) => {
      if (apiKey) {
        setStatus("pending");
        setData(undefined);
        setError(null);

        return fetch(
          `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${areaCode}?apikey=${apiKey}&metric=true`
        )
          .then((response) => response.json())
          .then((data) => {
            setData(data);
          })
          .catch(setError)
          .finally(() => setStatus("done"));
      }
    },
    [apiKey]
  );

  return { forecast, data, status, error };
}
