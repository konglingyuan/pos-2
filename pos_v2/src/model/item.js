function Item(barcode, name, unit, price) {
    this.barcode = barcode;
    this.name = name;
    this.unit = unit;
    this.price = price || 0.00;
}

Item.all = function() {
  return [
    new Item('ITEM000000', '可口可乐', '瓶', 3.00),
    new Item('ITEM000001', '雪碧', '瓶', 3.00),
    new Item('ITEM000002', '苹果', '斤', 5.50),
    new Item('ITEM000003', '荔枝', '斤', 15.00),
    new Item('ITEM000004', '电池', '个', 2.00),
    new Item('ITEM000005', '方便面', '袋', 4.50)
  ];
};

Item.findItems = function(inputsArray) {

  var allItems = this.all();

  var items = [];

  for(var i = 0; i < inputsArray.length; i++) {
    for(var j = 0; j < allItems.length; j++) {
      if(inputsArray[i][0] === allItems[j].barcode) {
        items.push({ item : allItems[j], count : inputsArray[i][1]});
      }
    }
  }
  //console.log(inputsArray[i][0]);
  // for(var i = 0; i < inputs.length; i++) {
  //   for(var j = 0; j < allItems.length; j++) {
  //     if(inputs[i] === allItems[j].barcode) {
  //       items.push(allItems[j]);
  //     }
  //   }
  // }
  //console.log(items);
  return items;
};
