class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateInventory() {
    for (const item of this.items) {
      item.updateQuality();
      if (item.name !== 'Sulfuras, Hand of Ragnaros') {
        item.sellIn -= 1;
      }
    }
    return this.items;
  }
}

module.exports = {
  Shop,
};
