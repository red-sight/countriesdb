export interface ICountry {
  code: string;
  name: string;
  abbr2: string;
  abbr3: string;
  continent: string | null;
  currency_code: string;
  subregion: string;
  phoneMasks?: string[] | string;
  flags?: string[];
}
