const { Sulfuras } = require('../src/sulfuras.js');

describe('Sulfuras', () => {
  it('should never change in quality', () => {
    const sulfurasItem = new Sulfuras('Sulfuras, Hand of Ragnaros', 0, 80);
    sulfurasItem.updateQuality();
    expect(sulfurasItem.quality).toEqual(80);
  });
});
