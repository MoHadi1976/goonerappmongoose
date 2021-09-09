require(".db/connection");
const mongoose = require("mongoose");
const {addPlayer} = require("./gooners/gooner.methods");
const command = process.ergv[2];

const app = async () => {
    if (command === "add"){
        await addPlayer({
            player: process.argv[3],
            team: process.argv[4],
            gooner: process.argv[5]
        })
    }
    mongoose.disconnect();
}

app();