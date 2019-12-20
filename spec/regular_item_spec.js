const { RegularItem } = require('../src/regular_item.js');

describe('RegularItem', () => {
  const itemName = 'foo';

  describe('#updateQuality', () => {
    it('should reduce in quality by 1', () => {
      const regItem = new RegularItem(itemName, 20, 10);
      regItem.updateQuality();
      expect(regItem.quality).toEqual(9);
    });

    it('should not reduce quality below 0', () => {
      const regItem = new RegularItem(itemName, 20, 0);
      regItem.updateQuality();
      expect(regItem.quality).toEqual(0);
    });

    it('should reduce quality by 2 when overdue', () => {
      const regItem = new RegularItem(itemName, 0, 10);
      regItem.updateQuality();
      expect(regItem.quality).toEqual(8);
    });
  });
});
