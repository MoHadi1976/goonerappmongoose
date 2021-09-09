const mongoose = require("mongoose");

const goonerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    team: {
        type: String,

    },
    gooner: {
        type: String,
        required: true,
    },

});

const Gooner = mongoose.model("Gooner", goonerSchema);

module.exports = Gooner;