const { Shop } = require('../src/gilded_rose.js');
const { Item } = require('../src/item.js');
const { BackstagePasses } = require('../src/backstage_passes.js');
const { Sulfuras } = require('../src/sulfuras.js');
const { AgedBrie } = require('../src/aged_brie.js');
const { RegularItem } = require('../src/regular_item.js');

describe('Gilded rose', () => {
  describe('Regular items', () => {
    const itemName = 'Foo'

    it('should reduce quality by 1', () => {
      const gildedRose = new Shop([new RegularItem(itemName, 20, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(9);
    });

    it('should not reduce quality below 0', () => {
      const gildedRose = new Shop([new RegularItem(itemName, 20, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });

    it('should lower the sellIn value by 1', () => {
      const gildedRose = new Shop([new RegularItem(itemName, 20, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(19);
    });

    it('should reduce quality by 2 when item is overdue', () => {
      const gildedRose = new Shop([new RegularItem(itemName, 0, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(8);
    });
  });

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

  describe('Sulfuras', () => {
    const itemName = 'Sulfuras, Hand of Ragnaros';

    it('should never change in quality', () => {
      const gildedRose = new Shop([new Sulfuras(itemName, 5, 80)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(80);
    });

    it('should never change the sellIn value', () => {
      const gildedRose = new Shop([new Sulfuras(itemName, 5, 80)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(5);
    });
  });

  describe('Aged Brie', () => {
    const itemName = 'Aged Brie';

    it('should increase quality by 1', () => {
      const gildedRose = new Shop([new AgedBrie(itemName, 20, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(11);
    });

    it('should increase quality by 2 when overdue', () => {
      const gildedRose = new Shop([new AgedBrie(itemName, 0, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(12);
    });

    it('should not increase quality above 50', () => {
      const gildedRose = new Shop([new AgedBrie(itemName, 20, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
    });
  });
});
