function UserOrder() {
  this.list = []
};


UserOrder.prototype.addPizza = function (pizza) {
  this.list.push(pizza)
}

function Pizza(pieSize, pieTopping, pieDelivery, pizzaTotal) {
  this.pieSize = pieSize,
  this.pieTopping = pieTopping,
  this.pieDelivery = pieDelivery
}

Pizza.prototype.price = function () {
  var total = 0;
  if (this.pieSize === "small") {
    total += 6;
  }else if (this.pieSize === "medium") {
    total += 9;
  }else if (this.pieSize === "large") {
    total += 12;
  }else{
    total += 0;
  }if (this.pieTopping === "cheese"){
    total += 1;
  }else if (this.pieTopping === "pepperoni"){
    total += 2;
  }else if (this.pieTopping === "veggie"){
    total += 1.50;
  }else{
    total += 0;
  }if (this.pieDelivery === "pickUp"){
    total += 0;
  }else if (this.pieDelivery === "delivery"){
    total += 5;
  }
  return total;
};


$(document).ready(function() {
  $(".submitOrder").submit(function(event) {
    event.preventDefault();
    var userPieSize =  $("input:radio[name=pizzaSize]:checked").val();
    var userPieTopping = $("input:radio[name=pizzaFlavor]:checked").val();
    var userPieDelivery = $("input:radio[name=pickUpOrDelivery]:checked").val();
    var newPizza = new Pizza(userPieSize, userPieTopping, userPieDelivery);
    $("#userOrder").text("$" + newPizza.price());
  });
});
