// string type variable
var bottle = 'water';
var bottleColor = 'yellow';
var prnColor = 'blue';

// number type variable
var sunglassPrice = 120;

// boolean type variable
var isExpensive = true;

var tableItems = ['bottle', 'pen', 'mouse', 'sunglass', 'paper'];

var item3 = tableItems[3];
// console.log(item3);
tableItems[4] = 'notebook';
// console.log(tableItems[4]);
var penIndex = tableItems.indexOf('pen');
// console.log(penIndex);

// conditionals
if (tableItems.length > 5) {
    console.log('na');
}
else if (tableItems[1] == 'pen') {
    console.log('ha');
}
else {
    console.log('yes');
}