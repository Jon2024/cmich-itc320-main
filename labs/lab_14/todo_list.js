"use strict";

const domain = "https://jsonplaceholder.typicode.com";
const url = "https://jsonplaceholder.typicode.com/users";

const displayUsers = async () => {
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(e => console.log(e.message));
}

$("#document").ready( async () => {
    const json = await displayUsers(url); //calls displayUsers

    //let userOptions = '<option></option>'
    //for(let users of json.name){
       //userOptions += `<option>${users.name}</option>`;
    //}
    //$("#users").append(userOptions);

    for( var i = 0; i < url.length; i++){
        var select = document.getElementById('users');
        var option = document.createElement('option');
        option.text = url[i].name;
        select.add(option);
    }
})