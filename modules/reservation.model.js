const mongoose = require('moongose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    checkIn: {
        type: String,
        required: true
    },
    checkOut: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    reservationDate: {
        type: Date, default: Data.now,
        required: true
    },
    dateCreated: {
        type: Date, default: Data.now,
        required: true
    }
})

const reservation = mongoose.model('reservation_details', reservationSchema);
module.exports = reservation;