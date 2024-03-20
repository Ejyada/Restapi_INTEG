const mongoose = require('moongose');
const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    mName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    age: {
        type: Number, min: 0, max: 999,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date, default: Data.now,
        required: true
    },
})

const userInfo = mongoose.model('user_details', userInfoSchema);
module.exports = userInfo;