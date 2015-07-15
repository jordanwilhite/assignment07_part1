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

  var sum = prices.reduce(function(total){
    return total;
  });

    return sum / items.length;
};

answer1.innerHTML = getAvg(items).toFixed(2);

function priceRange(items) {
  if (items.price > 14 && items.price < 18);
  .map(function(price) {
    return price.title;
  });
};

answer2.innerHTML = priceRange(items)

function currencyCode(items){
  return (item.currency_code);
  .map(function(items){
    return items.title
  });
};

answer3.innerHTML = currencyCode(items)


}
 var wood = items.filter(function(item){
  return item.materials.indexOf('wood') !== -1;
   })
   return '<li>' +item.title + item.price + '</li>';
   return hasWood.length;
}).reduce(function(html, item){

   return html + item;
})

answer4.innerHTML = wood;

function eight(items, materialsLength){
  return items.filter(function(item){
    return item.materials.length >= materialsLength;
  }).map(function(item){

    return '<li>' + item.title + item.materials + '. This item is made of ' + item.materials.length + " materials" +'</li>';
  }).reduce(function(html, item){

    return html + item;
  });
};

ans5.innerHTML = eight(items, 8);


var sellers = items.filter(function(items){
  return item.who_made === "i_did";
});

answer6.innerHTML = sellers.length + "are made by their sellers"
