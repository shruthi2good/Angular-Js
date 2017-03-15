(function(){
  'use strict';
     var shoppingList3=[];
  var shoppingList2 = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Bread",
    quantity: "5"
  }
];



angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController)


.service('ShoppingListSErvice',ShoppingListSErvice);


ShoppingListController.$inject = ['$scope','ShoppingListSErvice'];
function ShoppingListController($scope,ShoppingListSErvice) {


          var showList=this;
          var shoppedList=this;
          $scope.shoppingList2=shoppingList2;

          showList.items=$scope.shoppingList2;
          showList.removeandaddItem = function (itemIndex,name,quantity) {
           ShoppingListSErvice.removeandaddItem(showList.items.itemIndex,showList.items.name,showList.items.quantity);
         };
         showList.itemsshopped=ShoppingListSErvice.getItems();
          };



  function ShoppingListSErvice()
  {
          var service=this;
          var itemsbought=[];


       service.removeandaddItem=function(itemIndex,name,quantity){

             var shoppedItem = {
                  name: shoppingList2.name,
                  quantity:shoppingList2.quantity
              };
             itemsbought.push(shoppedItem);

             shoppingList2.splice(itemIndex, 1);
       };
       service.getItems = function () {
          return itemsbought;
        };
  }
})();
