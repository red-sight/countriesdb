import countries from './countries.json';
import { IGetCountryBy } from './types/IGetCountryBy';

export type Country = (typeof countries)[number];
export type ISO2 = Country['iso2'];
export type ISO3 = Country['iso3'];
export class Countries {
  public static getByISO2(iso2: ISO2): Country | undefined {
    const found = this.find({ iso2 });
    if (found && found.length) return found[0];
  }

  public static getByISO3(iso3: ISO3): Country | undefined {
    const found = this.find({ iso3 });
    if (found && found.length) return found[0];
  }

  public static find(filters: IGetCountryBy): Country[] | undefined {
    const filtersArr = Object.keys(filters).map((key) => {
      return {
        key,
        value: filters[key as keyof IGetCountryBy],
      };
    });

    return countries
      .filter((c) => {
        return filtersArr.every((filter) => c[filter.key as keyof IGetCountryBy] === filter.value);
      })
      .map((c) => {
        return {
          ...c,
          flags: {
            '1x1': this.flagLink(c.iso2, '1x1'),
            '4x3': this.flagLink(c.iso2, '4x3'),
          },
        };
      });
  }

  private static flagLink(abbr2: string, size: string) {
    return `https://api.iconify.design/flag/${abbr2.toLowerCase()}-${size}.svg`;
  }
}
