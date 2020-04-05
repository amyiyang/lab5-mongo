const mongoose = require("mongoose")
// Recall how exports work in Node.js?
const ItemsSchema = require('./items.schema').ItemsSchema

// Here we are mapping our PokemonSchema to the model Pokemon.
// If we are interested in referencing the Pokemon model elsewhere,
// we can simply do mongoose.model("Pokemon") elsewhere
const ItemsModel = mongoose.model("Items", ItemsSchema);

function insertItem(item) {
    return ItemsModel.create(item);
}

function getAllItems() {
    return ItemsModel.find().exec();
}
// Note the difference between the find above and below.
// Above, this is finding pretty ALL documents
// Below is finding all the documents that match this
// constraint
// function findPokemonByOwner(owner) {
//     return PokemonModel.find({owner: owner}).exec();
// }
//
// // Mongo provides a findById to query for the _id field (and you don't have
// // to use the ObjectId class here!
// function findPokemonById(id) {
//     return PokemonModel.findById(id).exec();
// }
//
// function deletePokemon(id) {
//     return PokemonModel.deleteOne({_id: id});
// }

// function updateItems(id, item) {
//     return ItemsModel.updateOne({_id: id}, {$set: item})
// }

// Make sure to export a function after you create it!
module.exports = {
    insertItem,
    getAllItems
};