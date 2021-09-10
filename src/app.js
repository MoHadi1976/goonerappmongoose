require("./db/connection");
const mongoose = require("mongoose");
const {addPlayer, listPlayers, updatePlayer, deletePlayer} = require("./gooners/gooner.methods");
const Gunner = require("./gooners/gooner.model");
const command = process.argv[2];

const app = async () => {
    if (command === "add"){
        await addPlayer({
            name: process.argv[3],
            team: process.argv[4],
            gooner: process.argv[5]
        })
    }else if (command === "list"){
        await listPlayers(Gunner)
    }else if (command === "update"){
        const updateObj = {
            filter: process.argv[3],
            team: process.argv[4],
            gooner: process.argv[5],
        }
        await updatePlayer(updateObj)
    }else if (command === "delete"){
        const deleteObj ={
            filter: process.argv[3]
        }
        await deletePlayer(deleteObj)
    }
    mongoose.disconnect();
}

app();