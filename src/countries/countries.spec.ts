import { Countries } from './Countries';

describe('Test', () => {
  it('console', () => {
    const res = Countries.getByAlpha2('RU');
    console.log(res);
  });
});
