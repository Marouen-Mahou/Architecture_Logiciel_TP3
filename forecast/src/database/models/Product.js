const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    desc: String,
    day: String,
    store: String,
});

module.exports =  mongoose.model('product', ProductSchema);