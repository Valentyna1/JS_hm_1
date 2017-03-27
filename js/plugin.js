// // 1 Первая буква в верхнем регистре
// var str = 'I am in the easycode',
//     strNew = '',
// 	space = 0,
// 	position = 0;
// while (space >= 0) {
//     space = str.indexOf(' ', position);
//     strNew += str[position].toUpperCase() + str.slice(position + 1, (space < 0 ? str.length : space + 1));
//     position = space + 1;
// }
// console.log(strNew);


// // 2 Строка - перевертыш
// var str = 'tseb eht ma I',
// 	strNew = '';
// for (var i = str.length-1; i>=0; i--) {
// 	strNew += str[i];
// }
// console.log(strNew);


// // 3 10!
// var	newRes = 1;
// for (var i = 10; i > 0; i--) {
// 	newRes *= i;
// }
// console.log(newRes);


// // 4 Строка считаем
// var str = "Cчитаем до 10-и: ";
// for (var i = 1; i<=10; i++) {
// 	str += i + ',';
// }
// console.log(str.slice(0, length-1));


// 5 Первая буква в верхнем регистре без пробелов
var str = 'JavaScript is a pretty good language',
    strNew = '',
    space = 0,
    position = 0;
while (space >= 0) {
    space = str.indexOf(' ', position);
    if (space < 0) {
    	strNew += str[position].toUpperCase() + str.slice(position + 1, str.length);
	} else {
        strNew += str[position].toUpperCase() + str.slice(position + 1, space);
	}
    position = space + 1;
}
console.log(strNew);


// // 6 Нечетные числа 1-15
// var i = 1;
// for ( ; i <=15; i = i+2) {
// 	console.log(i);
// }