var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');
var answer4 = document.getElementById('answer4');
var answer5 = document.getElementById('answer5');
var answer6 = document.getElementById('answer6');

function getAvg(items){
  var prices = items.map(function(item){
    return item.price;
  })
//Above function grabs all of the items.js prices and returns them.
  var sum = prices.reduce(function(total){
    return total;
  });
//
    return sum / items.length;
};

answer1.innerHTML = getAvg(items).toFixed(2);

function priceRange(items) {
  if (items.price > 14 && items < 18);
  .map(function(price) {
    return price.title;
  });
}
answer2.innerHTML = priceRange(items)

function currencyCode(items){
  return (item.currency_code);
  .map(function(items){
    return items.title
  });

};

answer3.innerHTML = currencyCode(items)


answer4.innerHTML =
answer5.innerHTML =
answer6.innerHTML =
