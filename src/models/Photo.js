const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [4, 'Name should be at least 4 characters'],
    },
    image: {
        type: String,
        required: [true, 'ImageUrl is required'],
        match: {
            regex: /^hhtps?:\/\//,
            message: 'Invalid url'
        }
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: 1,
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minLength: [10, 'Description should be at least 10 characters'],
    },
    genre: {
        type: String,
        required: [true, 'Genre is required'],
        minLength: [2, 'Genre should be at least 2 characters'],
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