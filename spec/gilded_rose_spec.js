const { Shop } = require('../src/gilded_rose.js');
const { Item } = require('../src/item.js');

describe('Gilded Rose', () => {
  describe('Regular items', () => {
    it('should reduce quality by 1', () => {
      const gildedRose = new Shop([new Item('foo', 20, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(9);
    });

    it('should not reduce quality below 0', () => {
      const gildedRose = new Shop([new Item('foo', 20, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });

    it('should lower the sellIn value by 1', () => {
      const gildedRose = new Shop([new Item('foo', 20, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(19);
    });
  });

  describe('Overdue regular items', () => {
    it('should reduce quality by 2', () => {
      const gildedRose = new Shop([new Item('foo', 0, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(8);
    });
  });
});
