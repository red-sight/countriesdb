export interface IGetCountryBy {
  code?: string;
  name?: string;
  iso2?: string;
  iso3?: string;
  continent?: string;
  currency_code?: string;
  subregion?: string;
  phoneMasks?: string[] | string;
}
