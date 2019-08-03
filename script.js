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
    main(data);
    console.log(data.types[0].type.name);
}
}

function main(pokeAPI)  // pokeAPI contains raw data from the api
 {   //document.getElementById("stat-para").innerHTML = "Type: " + x.valu;  
    dispStats(pokeAPI);
}

function dispStats(pokeAPI)
{
    var id = pokeAPI.id;
    var speed = pokeAPI.stats[0].base_stat;
    var defense = pokeAPI.stats[3].base_stat;
    var attack = pokeAPI.stats[4].base_stat;
    var hp = pokeAPI.stats[5].base_stat;
    document.getElementById("poke-stat").innerHTML = "Speed: " + speed + "\n" + "Defense: " + defense + "\n" + "Attack: " + attack + "\n" + "HP: " + hp + "\n";  
 document.getElementById("poke-stat").style.color = "Blue";

}