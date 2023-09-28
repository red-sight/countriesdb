import countries from './data.json';
import { IGetCountryBy } from './types/IGetCountryBy';
import { ICountry } from './types/ICountry';

export class Countries {
  public static getByAlpha2(abbr2: string): ICountry | undefined {
    const found = this.find({ abbr2 });
    if (found && found.length) return found[0];
  }

  public static getByAlpha3(abbr3: string): ICountry | undefined {
    const found = this.find({ abbr3 });
    if (found && found.length) return found[0];
  }

  public static find(filters: IGetCountryBy): ICountry[] | undefined {
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
            '1x1': this.flagLink(c.abbr2, '1x1'),
            '4x3': this.flagLink(c.abbr2, '4x3'),
          },
        };
      });
  }

  private static flagLink(abbr2: string, size: string) {
    return `https://api.iconify.design/flag/${abbr2.toLowerCase()}-${size}.svg`;
  }
}
