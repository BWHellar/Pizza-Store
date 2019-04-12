// function userPizzaSelection() {
//   var pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
//   var pizzaFlavor = $("input:radio[name=pizzaFlavor]:checked").val();
//   var pickUpOrDelivery = $("input:radio[name=pickUpOrDelivery]:checked").val();
// }
function multiPizzaOrders() {
  this.orders = [],
  this.orderId = 0
}
multiPizzaOrders.prototype.addOrder = function(order) {
  order.id = this.assignOrderId();
  this.orders.push(order);
}
multiPizzaOrders.prototype.assignOrderId = function() {
  this.orderId += 1;
  return this.orderId;
}
multiPizzaOrders.prototype.findOrder = function(id) {
  for (var i = 0; i < this.orders.length; i++){
    if (this.orders[i]){
      if (this.orders[i].id == id){
        return this.orders[i]
      }
    }
  };
  return false;
}
function pizzaOrder(userName, pizSize, pizFlavor, picOrDel) {
  this.userName = userName,
  this.pizSize = pizSize,
  this.pizFlavor = pizFlavor,
  this.picOrDel = picOrDel
}
var multiOrder = new multiPizzaOrders();

function displayPizzaOrder(displayOrder) {
  var userOrder = $("ul.userOrder");
  var htmlForOrder = "";
  displayOrder.orders.forEach(function(order) {
    htmlForOrder += "<li id=" + order.id + ">" + pizzaOrder.userName + "</li>";
  });
  userOrder.html(htmlForOrder);
};

function showOrder(userId) {
  var orders = multiPizzaOrders.findOrder(userId);
  $(".name").html(pizzaOrder.userName)
  $(".size").html(pizzaOrder.pizSize)
  $(".flavor").html(pizzaOrder.pizFlavor)
  $(".pickOrDel").html(pizzaOrder.picOrDel)
}
function attachOrderListeners() {
  $("ul.userOrder").on("click", "li", function(){
    showOrder(this.id);
  });
};

$(document).ready(function() {
  $(".submitOrder").submit(function(event) {
    attachOrderListeners();
    event.preventDefault();
    multiOrder.addOrder(new pizzaOrder ($("input.username").val(), $("input:radio[name=pizzaSize]:checked").val(), $("input:radio[name=pizzaFlavor]:checked").val(), $("input:radio[name=pickUpOrDelivery]:checked").val()))
    var username = $("input.username").val();
    var pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
    var pizzaFlavor = $("input:radio[name=pizzaFlavor]:checked").val();
    var pickUpOrDelivery = $("input:radio[name=pickUpOrDelivery]:checked").val();
    console.log(pizzaSize);
    console.log(pizzaFlavor);
    console.log(pickUpOrDelivery);
    displayPizzaOrder(displayOrder);
  });

});
