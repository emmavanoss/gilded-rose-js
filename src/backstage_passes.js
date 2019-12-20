const { Item } = require('./item.js')

class BackstagePasses extends Item {
  updateQuality() {
    if (this.quality < 50) {
      this.quality += 1;
    }
    if (this.sellIn < 11) {
      if (this.quality < 50) {
        this.quality += 1;
      }
    }
    if (this.sellIn < 6) {
      if (this.quality < 50) {
        this.quality += 1;
      }
    }
    if (this.sellIn < 1) {
      this.quality = 0;
    }
  }
}

module.exports = {
  BackstagePasses,
};
