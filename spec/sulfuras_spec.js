const { Sulfuras } = require('../src/sulfuras.js');

describe('Sulfuras', () => {
  const itemName = 'Sulfuras, Hand of Ragnaros';

  it('should never change in quality', () => {
    const sulfuras = new Sulfuras(itemName, 0, 80);
    sulfuras.updateQuality();
    expect(sulfuras.quality).toEqual(80);
  });
});
