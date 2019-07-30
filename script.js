function onSubmit()
{
var pokemon = document.getElementById("Poke-name").value;
console.log(pokemon)
var request = new XMLHttpRequest();
request.open("GET", "https://pokeapi.co/api/v2/pokemon/"+pokemon, true);
var pokedata;
request.send();
request.onload = function()
{
    var data = JSON.parse(this.response);
    dispStats(data);
    console.log(data.types[0].type.name);
    pokedata = data;
}
}

function dispStats(pokeObject)
 {   //document.getElementById("stat-para").innerHTML = "Type: " + x.valu;
 window.location.href = "pokedex-page.html";    
 document.getElementById("stat-para").innerHTML = "Type: "; 
    
}