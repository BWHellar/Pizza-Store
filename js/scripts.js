// function userPizzaSelection() {
//   var pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
//   var pizzaFlavor = $("input:radio[name=pizzaFlavor]:checked").val();
//   var pickUpOrDelivery = $("input:radio[name=pickUpOrDelivery]:checked").val();
// }
function pizzaOrder(pizSize, pizFlavor, picOrDel) {
  this.pizSize = pizSize,
  this.pizFlavor = pizFlavor,
  this.picOrDel = picOrDel

}

function showPizzaOrder(displayOrder) {
  var userOrder = $("ul#userOrder");
  var htmlForOrder = "";
  displayOrder.forEach(function() {
    htmlForOrder += "<li>" + pizzaOrder.pizSize + </li>

  });

}
$(document).ready(function() {
  $(".submitOrder").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
    var pizzaFlavor = $("input:radio[name=pizzaFlavor]:checked").val();
    var pickUpOrDelivery = $("input:radio[name=pickUpOrDelivery]:checked").val();
    console.log(pizzaSize);
    console.log(pizzaFlavor);
    console.log(pickUpOrDelivery);
  });

});
