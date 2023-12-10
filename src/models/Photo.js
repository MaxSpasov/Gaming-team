const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    image: {
        type: String,
        required: [true, 'ImageUrl is required'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
    },
    genre: {
        type: String,
        required: [true, 'Genre is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
});
const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;