interface Headline {
  EffectiveDate: string;
  EffectiveEpochDate: number;
  Severity: number;
  Text: string;
  Category: string;
  EndDate: string;
  EndEpochDate: number;
  MobileLink: string;
  Link: string;
}

export interface TemperatureValue {
  Value: number;
  Unit: string;
  UnitType: number;
}

interface Temperature {
  Minimum: TemperatureValue;
  Maximum: TemperatureValue;
}

export interface Forecast {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  PrecipitationType: string;
  PrecipitationIntensity: string;
}

export interface DailyForecast {
  Date: string;
  EpochDate: number;
  Temperature: Temperature;
  Day: Forecast;
  Night: Forecast;
  Sources: string[];
  MobileLink: string;
  Link: string;
}

export interface ForecastData {
  Headline: Headline;
  DailyForecasts: DailyForecast[];
}
