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

  describe('Aged brie', () => {
    it('should increase quality by 1', () => {
      const gildedRose = new Shop([new Item('Aged Brie', 20, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(11);
    });

    it('should increase quality by 2 when overdue', () => {
      const gildedRose = new Shop([new Item('Aged Brie', 0, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(12);
    });

    it('should not increase quality above 50', () => {
      const gildedRose = new Shop([new Item('Aged Brie', 20, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
    });
  });

  describe('Sulfuras', () => {
    it('should never change in quality', () => {
      const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 5, 80)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(80);
    });

    it('should never change the sellIn value', () => {
      const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 5, 80)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(5);
    });
  });

  describe('Backstage passes', () => {
    it('should increase quality by 1 if sellIn is over 10', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 20, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(11);
    });

    it('should increase quality by 2 if sellIn is 10', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(12);
    });

    it('should increase quality by 2 if sellIn is 6', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 6, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(12);
    });

    it('should increase quality by 3 if sellIn is 5', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 3, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(13);
    });

    it('should increase quality by 3 if sellIn is 1', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(13);
    });

    it('should set quality to 3 if sellIn is 0', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });
  });
});
