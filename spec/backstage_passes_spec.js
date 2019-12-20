const { BackstagePasses } = require('../src/backstage_passes.js');

describe('BackstagePasses', () => {
  const itemName = 'Backstage passes to a TAFKAL80ETC concert';

  describe('#updateQuality', () => {
    it('should increase quality by 1 if sellIn is over 10', () => {
      const backstagePasses = new BackstagePasses(itemName, 20, 10);
      backstagePasses.updateQuality();
      expect(backstagePasses.quality).toEqual(11);
    });

    it('should increase quality by 2 if sellIn is 10', () => {
      const backstagePasses = new BackstagePasses(itemName, 10, 10);
      backstagePasses.updateQuality();
      expect(backstagePasses.quality).toEqual(12);
    });

    it('should increase quality by 2 if sellIn is 6', () => {
      const backstagePasses = new BackstagePasses(itemName, 6, 10);
      backstagePasses.updateQuality();
      expect(backstagePasses.quality).toEqual(12);
    });

    // it('should increase quality by 3 if sellIn is 5', () => {
      // const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 3, 10)]);
      // const items = gildedRose.updateQuality();
      // expect(items[0].quality).toEqual(13);
    // });

    // it('should increase quality by 3 if sellIn is 1', () => {
      // const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 10)]);
      // const items = gildedRose.updateQuality();
      // expect(items[0].quality).toEqual(13);
    // });

    // it('should set quality to 0 if sellIn is 0', () => {
      // const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)]);
      // const items = gildedRose.updateQuality();
      // expect(items[0].quality).toEqual(0);
    // });
  });
});
