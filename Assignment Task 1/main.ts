// 1. Miles-To-Kilometers converter (Operators):

// * create a variable named  miles and assign a numeric value representing distance in miles.
// * calculate the  equivalent distance in kilometers using the conversion factor (1 mile = 1.60934 kilometers). you can achieve this  by multiplying miles by 1.60934.
// * store the converted distance in kilometers in a variable named kilometers.
// * use console.log to print a message in the following format:
// * The distance of 130Kms is equal to 209.2142

let miles: number = 130;
let miles_To_Kilometer: number = 1.60934;

let kilometers: number = miles * miles_To_Kilometer;
console.log(`The distance of ${kilometers.toFixed(4)} kms is equal to ${miles} miles.`);

