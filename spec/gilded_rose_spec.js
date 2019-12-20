const { Shop } = require('../src/gilded_rose.js');

describe('Gilded Rose', () => {
  let foo = {
    updateQuality: () => {},
  };

  it('calls updateQuality on each item', () => {
    const gildedRose = new Shop([foo]);
    spyOn(foo, 'updateQuality');
    gildedRose.updateQuality();
    expect(foo.updateQuality).toHaveBeenCalled();
  });
});
