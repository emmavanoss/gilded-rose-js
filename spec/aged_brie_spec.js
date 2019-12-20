const { AgedBrie } = require('../src/aged_brie.js');

describe('Aged Brie', () => {
  const itemName = 'Aged Brie';

  describe('#updateQuality', () => {
    it('should increase in quality by 1', () => {
      const agedBrie = new AgedBrie(itemName, 20, 10);
      agedBrie.updateQuality()
      expect(agedBrie.quality).toEqual(11);
    });

    it('should increase in quality by 2 when overdue', () => {
      const agedBrie = new AgedBrie(itemName, 0, 10);
      agedBrie.updateQuality()
      expect(agedBrie.quality).toEqual(12);
    });

    it('should not increase in quality above 50', () => {
      const agedBrie = new AgedBrie(itemName, 20, 50);
      agedBrie.updateQuality()
      expect(agedBrie.quality).toEqual(50);
    });
  });
});
