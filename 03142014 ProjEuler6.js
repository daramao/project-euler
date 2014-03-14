/* 
Author: Dara Mao
Date: 03-14-2014
Project: To solve Project Euler #6 (Find the difference between square of sum of the first 100 numbers and sum of squared first 100 numbers)
*/

var sumA=0;
var sumB=0;
var sumSqr=0;

for (var i=0; i<=100; i++){
	sumA+=Math.pow(i,2);
	sumB+=i;
}
sumSqr=Math.pow(sumB,2);
alert(sumSqr-sumA);