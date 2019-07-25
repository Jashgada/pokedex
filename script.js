function onSubmit()
{
var pokemon = document.getElementById("Poke-name").value;
console.log(pokemon)
var request = new XMLHttpRequest();
request.open("GET", "https://pokeapi.co/api/v2/pokemon/"+pokemon, true);
var pokedata;
request.onload = function()
{
    var data = JSON.parse(this.response);
    console.log(data.types[0].type.name);
    pokedata = data;
}
request.send();
window.open("pokedex-page.html");
}

function dispStats(pokeObject)
{
    var x = {valu: 1, value: 2};
    console.log(x.valu);
    console.log(pokeObject);
    document.getElementById("stat-para").innerHTML = "Type: " + x.valu; 
    document.getElementById("stat-para").innerHTML = "Type: " + pokeObject.types[0].type.name;  
}