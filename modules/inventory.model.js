const mongoose = require('moongose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    bedSheets: {
        type: Boolean, default: false,
        required: true
    },
    blanket: {
        type: Boolean, default: false,
        required: true
    },
    towels: {
        type: Boolean, default: false,
        required: true
    },
    room_slippers: {
        type: Boolean, default: false,
        required: true
    },
    tv: {
        type: Boolean, default: false,
        required: true
    },
    remote: {
        type: Boolean, default: false,
        required: true
    },
    robe: {
        type: Boolean, default: false,
        required: true
    },
    closet: {
        type: Boolean, default: false,
        required: true
    },
    dateCreated: {
        type: Date, default: Data.now,
        required: true
    },
})

const inventory = mongoose.model('inventory_details', inventorySchemaSchema);
module.exports = inventory;