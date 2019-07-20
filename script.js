function onSubmit()
{
var pokemon = document.getElementById("Poke-name").value;
console.log(pokemon)
var request = new XMLHttpRequest();
request.open("GET", "https://pokeapi.co/api/v2/pokemon/"+pokemon, true);
request.onload = function()
{
    var data = JSON.parse(this.response);
    console.log(data.types[0].type.name);
}
request.send();
window.open("pokedex-page.html");
dispStats(data)
}

function dispStats(pokeObject)
{

}