// Bussiness Logic
// Object for saving multiple orders
function MultiPizzaOrders() {
  this.orders = [],
  this.orderId = 0
}
// Prototype to push orders to the Object MultiPizzaOrders empty array
MultiPizzaOrders.prototype.addOrder = function(order) {
  order.id = this.assignOrderId();
  this.orders.push(order);
}
// Prototype to assign and add to an id to MultiPizzaOrders
MultiPizzaOrders.prototype.assignOrderId = function() {
  this.orderId += 1;
  return this.orderId;
}
// Prototype to pull MultiPizzaOrders order array to find the id connceted to it
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
// Object for saving order price depending on user input
function UserOrder() {
  this.list = []
};
// Prototype to push pizza price to UserOrder list empty array
UserOrder.prototype.addPizza = function (pizza) {
  this.list.push(pizza)
}
// Prototype to determine the price of user's pizza choice and return the total
Pizza.prototype.price = function () {
  var total = 0;
  if (this.pieSize === "small") {
    total += 6.50;
  }else if (this.pieSize === "medium") {
    total += 9.50;
  }else if (this.pieSize === "large") {
    total += 12.50;
  }else{
    total += 0;
  }if (this.pieTopping === "cheese"){
    total += .99;
  }else if (this.pieTopping === "pepperoni"){
    total += 2.50;
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
// Object to assign user name, pizza size, pizza flavor, and pick up or delivery option for MultiPizzaOrders object
function PizzaOrder(userName, pizSize, pizFlavor, picOrDel) {
  this.userName = userName,
  this.pizSize = pizSize,
  this.pizFlavor = pizFlavor,
  this.picOrDel = picOrDel
}
// Creating a var to create a new MultiPizzaOrders to be able to create new id
var multiPizzaOrders = new MultiPizzaOrders();
// Object to assing pizza size price, pizza topping price, and delivery price for userOrder
function Pizza(pieSize, pieTopping, pieDelivery) {
  this.pieSize = pieSize,
  this.pieTopping = pieTopping,
  this.pieDelivery = pieDelivery
}
// Object to display user name to be clicked on for show more details
function displayPizzaOrder(displayOrder) {
  var userOrder = $("ul#userOrder");
  var htmlForOrder = "";
  displayOrder.orders.forEach(function(order) {
    htmlForOrder += "<li id=" + order.id + ">" + order.userName + "</li>";
  });
  userOrder.html(htmlForOrder);
};
// Object to allow user order details to be displayed when activated
function showOrder(userId) {
  var order = multiPizzaOrders.findOrder(userId);
  $("#showUserOrder").show();
  $(".name").html(order.userName);
  $(".size").html(order.pizSize);
  $(".flavor").html(order.pizFlavor);
  $(".pickOrDel").html(order.picOrDel)
}
// Object to append showOrder with user name is clicked
function attachOrderListeners() {
  $("ul#userOrder").on("click", "li", function() {
    showOrder(this.id);
  });
};
// UI Logic for when button ity clicked
$(document).ready(function() {
  $(".submitOrder").submit(function(event) {
    attachOrderListeners();
    event.preventDefault();
    multiPizzaOrders.addOrder(new PizzaOrder ($("input#name").val(), $("input:radio[name=pizzaSize]:checked").val(), $("input:radio[name=pizzaFlavor]:checked").val(), $("input:radio[name=pickUpOrDelivery]:checked").val()))
    var userPieSize =  $("input:radio[name=pizzaSize]:checked").val();
    var userPieTopping = $("input:radio[name=pizzaFlavor]:checked").val();
    var userPieDelivery = $("input:radio[name=pickUpOrDelivery]:checked").val();
    var newPizza = new Pizza(userPieSize, userPieTopping, userPieDelivery);
    $("#orderPrice").text("$" + newPizza.price());
    displayPizzaOrder(multiPizzaOrders);
  });

});
