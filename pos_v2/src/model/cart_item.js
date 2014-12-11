function CartItem(item, count) {
  this.item = item;
  this.count = count || 0 ;
}

CartItem.getCartItems = function(items,barcodes) {
  var cartItems = [];

  _.forEach(items, function(item) {
    var cartItem = _.find(cartItems, function(cartItem) {
      return cartItem.item.barcode === item.barcode;
    });
    if(cartItem) {
      cartItem.count++;
    } else {
      cartItems.push(new CartItem(item, 1));
    }
  });

   return cartItems;
};

CartItem.prototype.getSubtotal = function() {
  return this.item.price * this.count;
};

CartItem.prototype.getSave = function() {
  return this.item.price * (parseInt(this.count/3));
};

CartItem.prototype.toInventoryText = function() {
  return '名称：' + this.item.name +
      '，数量：' + this.count + this.item.unit +
      '，单价：' + this.item.price.toFixed(2) +
      '(元)，小计：' + (this.getSubtotal().toFixed(2) - this.getSave().toFixed(2)) +
      '(元)\n';
};

CartItem.prototype.toPromotionText = function() {
  return '名称：'+ this.item.name +'，数量：'+ parseInt(this.count/3) +
          this.item.unit + '\n' ;
};
