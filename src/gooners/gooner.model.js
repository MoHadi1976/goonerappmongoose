const mongoose = require("mongoose");

const gunnerSchema = mongoose.Schema({
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

const Gunner = mongoose.model("Gunner", gunnerSchema);

module.exports = Gunner;