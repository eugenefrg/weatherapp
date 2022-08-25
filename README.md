# Weather App

This is a basic implementation of the [accuweather API](https://developer.accuweather.com/). This will be built using React and Material UI as a Single Page Application. I have created a mockup for the UI [here](https://www.figma.com/file/57e75tRFnOd1DIicMPHnMc/Untitled?node-id=0:3).

## Minimum Viable Product

- Location from IP
  - The location will be taken from the client's IP Address.
- 5 Day weather forecast
  - The API can provide the maximum of 5 days, with Day and Night forecasts.
  - Accuweather has it's own [weather icons](https://developer.accuweather.com/weather-icons), to save on time creating or sourcing the assets, we will use that instead.

## Setup

this project only requires on .env variable which is `REACT_APP_ACCUWEATHER_API_KEY`
