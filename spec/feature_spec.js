const { Shop } = require('../src/gilded_rose.js');
const { Item } = require('../src/item.js');
const { BackstagePasses } = require('../src/backstage_passes.js');

describe('Gilded rose', () => {
  describe('Backstage passes', () => {
    const itemName = 'Backstage passes to a TAFKAL80ETC concert';

    it('should increase quality by 1 if sellIn is over 10', () => {
      const gildedRose = new Shop([new BackstagePasses(itemName, 20, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(11);
    });

    it('should increase quality by 2 if sellIn is 10', () => {
      const gildedRose = new Shop([new BackstagePasses(itemName, 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(12);
    });

    it('should increase quality by 2 if sellIn is 6', () => {
      const gildedRose = new Shop([new BackstagePasses(itemName, 6, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(12);
    });

    it('should increase quality by 3 if sellIn is 5', () => {
      const gildedRose = new Shop([new BackstagePasses(itemName, 3, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(13);
    });

    it('should increase quality by 3 if sellIn is 1', () => {
      const gildedRose = new Shop([new BackstagePasses(itemName, 1, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(13);
    });

    it('should set quality to 0 if sellIn is 0', () => {
      const gildedRose = new Shop([new BackstagePasses(itemName, 0, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });

    it('should reduce sellIn by 1', () => {
      const gildedRose = new Shop([new BackstagePasses(itemName, 5, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(4);
    });
  });
});
