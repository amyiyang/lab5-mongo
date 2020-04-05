const Schema = require('mongoose').Schema;


exports.ItemsSchema = new Schema({
    // mongoose automically gives this an _id attribute of ObjectId
    owner: String,
    item: String,
    count: {type: Number},
    health: {type: Number}
// this explicitly declares what collection we're using
}, { collection : 'items' });