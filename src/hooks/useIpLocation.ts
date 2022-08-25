import { useEffect, useState } from "react";
import { Location } from "../types/LocationTypes";

/**
 * A hook that attempts to get the current location from
 * accuweather using geolocation-db's returned IP address.
 */
export default function useIpLocation(apiKey?: string) {
  const [data, setData] = useState<Location>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      // get the IP address from geolocation-db
      const ipAddress = await fetch("https://geolocation-db.com/json/")
        .then((response) => response.json())
        .then((data) => {
          return data.IPv4;
        });

      // get the location from accuweather.
      fetch(
        `https://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=${apiKey}&q=${ipAddress}`
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch(setError)
        .finally(() => setLoading(false));
    })();
  }, [apiKey]);

  return { data, error, loading };
}
