const { Item } = require('./item.js');

class RegularItem extends Item {
  updateQuality() {
    if (this.quality > 0) {
      this.quality -= 1;
    }
    if (this.sellIn < 1) {
      this.quality -= 1;
    }
  }
}

module.exports = {
  RegularItem,
};
