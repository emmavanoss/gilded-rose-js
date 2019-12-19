const { Shop } = require('../src/gilded_rose.js');
const { Item } = require('../src/item.js');

describe('Gilded Rose', () => {
  describe('Regular items', () => {
    it('should foo', () => {
      const gildedRose = new Shop([new Item('foo', 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual('fixme');
    });
  });
});
