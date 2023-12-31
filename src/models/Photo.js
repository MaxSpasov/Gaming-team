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
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    genre: {
        type: String,
        required: [true, 'Genre is required'],
    },
    platform: {
        type: String,
        required: [true, 'Platform is required'],
    },
    boughtBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }

});
const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;