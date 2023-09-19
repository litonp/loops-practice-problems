// for (var i = 1; i <= 20; i++) {
//     console.log(i);
//     if (i > 5) {
//         break;
//     }
// }

// var roastGiven = 0;
// while (roastGiven < 10) {
//     console.log('roast den');
//     roastGiven++;
//     if (roastGiven > 4) {
//         break;
//     }
// }

// var items = ['bottle', 'mouse', 'sunglass', 'pen', 'notbook'];
// for (var i = 0; i < items.length; i++) {
//     var item = items[i]
//     if (item == 'pen') {
//         break;
//     }
//     console.log(item)
// }

var numbers = [45, 87, 89, 56, 120, 32, 51, 25, 12, 13];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 100) {
        break;
    }
    console.log(number);
}