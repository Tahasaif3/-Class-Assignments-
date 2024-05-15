// 1. Miles-To-Kilometers converter (Operators):
// * create a variable named  miles and assign a numeric value representing distance in miles.
// * calculate the  equivalent distance in kilometers using the conversion factor (1 mile = 1.60934 kilometers). you can achieve this  by multiplying miles by 1.60934.
// * store the converted distance in kilometers in a variable named kilometers.
// * use console.log to print a message in the following format:
// * The distance of 130Kms is equal to 209.2142
var miles = 130;
var miles_To_Kilometer = 1.60934;
var kilometers = miles * miles_To_Kilometer;
console.log("The distance of ".concat(kilometers.toFixed(4), " kms is equal to ").concat(miles, " miles."));
