use('javierlm');

//3.Search all the characteristics related with the pokemon named Squirtle
use('javierlm');
db.getCollection('pokemon').find(
    {"name.english":"Squirtle"}
);

//4.Modify the information about Squirtle adding it a description. The description must be: "Squirtle's shell is not merely used for protection".
use('javierlm');
db.getCollection('pokemon').findOneAndUpdate(
    {"name.english":"Squirtle"},
    {$set:{"description":"Squirtle's shell is not merely used for protection"}}
);

//5.After this modification show again all characteristics related to Squirtle.
use('javierlm');
db.getCollection('pokemon').find(
    {"name.english":"Squirtle"}
);

//6.Show a list with the english name of all Pokemons with attack 20 or lower.
use('javierlm');
db.getCollection('pokemon').find(
    {"base.Attack": {$lte:20}},{"name.english":1,"_id":0}//o _id:0 fai que non se mostre o id
);

//7.Show a list with the english name of all Pokemons with attack 50 or greater and type Poison
use('javierlm');
db.getCollection('pokemon').find(
    {"base.Attack": {$lte:20}},{"name.english":1,"_id":0}
);

//8.Show a list with the english name and type of all Pokemons with name Pikachu or with attack 20 or lower.
use('javierlm');
db.getCollection('pokemon').find(
    {$or:[{"base.Attack": {$lte:20}}, {"name.english":"Pikachu"}]}
);

//9.Add same extra attacks for pokemons: Pikachu, Squirtle, Bulbasaur and Charmander. Use only one query. The extra attacks must be strong attack and ultra attack. 
use('javierlm');
db.getCollection('pokemon').updateMany(
    {$or:[{"name.english":"Pikachu"},{"name.english":"Squirtle"}, {"name.english":"Bulbasaur"}, {"name.english":"Charmander"}]},
     {$set:{"movements":["strong attack", "ultra attack"]}}
);

//10.Add 10 to the value of attack of all pokemon whose name begins with characters: Pik.
use('javierlm');
db.getCollection('pokemon').updateMany(
    {"name.english": "PIK/"},
     {$set:{"base.Attack":["strong attack", "ultra attack"]}}
);


