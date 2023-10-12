"use strict";
//ALMOST DONE, extra space below h2 and br!!!
const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

//Calculate Quarterly
var Q1 = 0;
Q1 = region1[0] + region2[0] + region3[0] + region4[0] + region5[0];

var Q2 = 0;
Q2 = region1[1] + region2[1] + region3[1] + region4[1] + region5[1];

var Q3 = 0;
Q3 = region1[2] + region2[2] + region3[2] + region4[2] + region5[2];

var Q4 = 0;
Q4 = region1[3] + region2[3] + region3[3] + region4[3] + region5[3];

//Calculate Region (Use for loop to add)
var R1 = 0;
for (var i = 0; i < region1.length; i++){
    R1 += region1[i];
}

var R2 = 0;
for (var i = 0; i < region2.length; i++){
    R2 += region2[i];
}

var R3 = 0;
for (var i = 0; i < region3.length; i++){
    R3 += region3[i];
}

var R4 = 0;
for (var i = 0; i < region4.length; i++){
    R4 += region4[i];
}

var R5 = 0;
for (var i = 0; i < region5.length; i++){
    R5 += region5[i];
}

//Calculate Total Sale
var TotalSale = R1 + R2 + R3 + R4 + R5;

//Print Sales by Quarter section
document.write(`<h2>Sales by Quarter</h2>`);
document.write(`Q1: $${Q1}`);
document.write(`<br>Q2: $${Q2}</br>`);
document.write(`Q3: $${Q3}`);
document.write(`<br>Q4: $${Q4}</br>`);

//Print Sales by Region section
document.write(`<h2>Sales by Region</h2>`);
document.write(`Region 1: $${R1}`);
document.write(`<br>Region 2: $${R2}</br>`);
document.write(`Region 3: $${R3}`);
document.write(`<br>Region 4: $${R4}</br>`)
document.write(`Region 5: $${R5}`);

//Print Total Sales section
document.write(`<h2>Total Sales</h2>`);
document.write(`$${TotalSale}`);

