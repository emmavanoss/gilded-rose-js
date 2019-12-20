const { Item } = require('./item.js')

class AgedBrie extends Item {
  updateQuality() {
    if (this.quality < 50) {
      this.quality += 1;
    }
    if (this.sellIn < 1) {
      if (this.quality < 50) {
        this.quality += 1;
      }
    }
  }
}

module.exports = {
  AgedBrie,
}
