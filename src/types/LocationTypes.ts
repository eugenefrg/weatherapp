interface NamedLocation {
  ID: string;
  LocalizedName: String;
  EnglishName: string;
}

interface AdministrativeArea extends NamedLocation {
  Level: number;
  LocalizedType: string;
  EnglishType: string;
  CountryID: string;
}

interface TimeZone {
  Code: string;
  Name: string;
  GmtOffset: number;
  IsDaylightSaving: boolean;
  NextOffsetChange?: any;
}

interface ElevationValue {
  Value: number;
  Unit: string;
  UnitType: number;
}

interface GeoPosition {
  Latitude: number;
  Longitude: number;
  Elevation: {
    Metric: ElevationValue;
    Imperial: ElevationValue;
  };
}

export interface Location {
  Version: number;
  Key: number;
  Type: string;
  Rank: number;
  LocalizedName: string;
  EnglishName: string;
  PrimaryPostalCode: string;
  Region: NamedLocation;
  Country: NamedLocation;
  AdministrativeArea: AdministrativeArea;
  TimeZone: TimeZone;
  GeoPosition: GeoPosition;
  IsAlias: boolean;
  SupplementalAdminAreas: any[];
  DataSets: string[];
}
