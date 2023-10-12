"use strict";
//ALL DONE DO NOT CHANGE!!!

//create while loop to allow more inputs
while(true){
    //prompt user to input temperture in Farenhight
    let temp_f = parseFloat(prompt("Enter farenheit temperture"));
    
    //check if it's not 999,ends program
    if(temp_f == 999){
        process.exit(0);
    }
    //alert user if number is in forbidden zone
    if (-100 > temp_f || temp_f > 212 ){
        alert("You entered " + temp_f + "." + "\nEntry must range from -100 to +212."); //alerts user
        continue;
    }
    temp_f = temp_f.toFixed(1);
    
    //calculate Celcius
    let temp_c = (temp_f - 32) * (5 / 9);
    temp_c = temp_c.toFixed(1);

    //print when program is done
    let html = `<p>${temp_f} F = ${temp_c} C</p>`;
    document.write(html);
}
