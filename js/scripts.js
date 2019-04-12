function MultiPizzaOrders() {
  this.orders = [];
  this.orderId = 0;
}
function PizzaOrder (userName, pizSize, pizFlavor, picOrDel) {
  this.userName = userName,
  this.pizSize = pizSize,
  this.pizFlavor = pizFlavor,
  this.picOrDel = picOrDel
}
PizzaOrder.prototype.sizeSelect = function() {
  if (newSize === "small"){
    this.price += 6;
  }else if (this.pizSize === "medium"){
    this.price += 9;
  }else if (this.pizSize === "large"){
    this.price += 12;
  }else{
    alert("hi")
    console.log("somthing went wrong with size");
  }
};
MultiPizzaOrders.prototype.addOrder = function(order) {
  order.id = this.assignOrderId();
  this.orders.push(order);
}
MultiPizzaOrders.prototype.assignOrderId = function() {
  this.orderId += 1;
  return this.orderId;
}
MultiPizzaOrders.prototype.findOrder = function(id) {
  for (var i = 0; i < this.orders.length; i++){
    if (this.orders[i]){
      if (this.orders[i].id == id){
        return this.orders[i]
      }
    }
  };
  return false;
}

function OrderPrice() {
  this.totalCost = [];
  this.priceId = 0;
}
OrderPrice.prototype.addOrder = function(order) {
  order.id = this.priceId;
  this.totalCost.push(order);
}
OrderPrice.prototype.assignPriceId = function() {
  this.priceId += 1;
  return this.priceId;
}
var orderPrice = new OrderPrice ();

function displayOrderPrice(orderPriceDisplay) {
  var priceDisplay = $("#.size-price");
  var htmlForPice = "";
  orderPrice.totalCost.forEach(function(order) {
  });
  orderPriceDisplay += "<li id=" + order.id + ">" + "Size of pizza" + "</li>"
};

function displayPizzaOrder(displayOrder) {
  var userOrder = $("ul#userOrder");
  var htmlForOrder = "";
  displayOrder.orders.forEach(function(order) {
    htmlForOrder += "<li id=" + order.id + ">" + order.userName + "</li>";
  });
  userOrder.html(htmlForOrder);
};

var multiPizzaOrders = new MultiPizzaOrders();

function showOrder(userId) {
  var order = multiPizzaOrders.findOrder(userId);
  $("#showUserOrder").show();
  $("#name").html(order.userName);
  $(".size").html(order.pizSize);
  $(".flavor").html(order.pizFlavor);
  $(".pickOrDel").html(order.picOrDel)
}

function attachOrderListeners() {
  $("ul#userOrder").on("click", "li", function() {
    showOrder(this.id);
  });
};


$(document).ready(function() {
  $(".submitOrder").submit(function(event) {
    attachOrderListeners();
    event.preventDefault();
    multiPizzaOrders.addOrder(new PizzaOrder ($("input#username").val(), $("input:radio[name=pizzaSize]:checked").val(), $("input:radio[name=pizzaFlavor]:checked").val(), $("input:radio[name=pickUpOrDelivery]:checked").val()))
    $("input#username").val();
    orderPrice.addOrder(new OrderPrice($("input:radio[name=pizzaSize]:checked").val(), $("input:radio[name=pizzaFlavor]:checked").val(), $("input:radio[name=pickUpOrDelivery]:checked").val()))
    var pizSize =  $("input:radio[name=pizzaSize]:checked").val();
    var pizFlavor = $("input:radio[name=pizzaFlavor]:checked").val();
    var picOrDel = $("input:radio[name=pickUpOrDelivery]:checked").val();
    displayPizzaOrder(multiPizzaOrders);
    displayOrderPrice(orderPriceDisplay);

  });

});
