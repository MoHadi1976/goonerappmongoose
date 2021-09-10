const Gunner = require("./gooner.model");

exports.addPlayer = async (newGunner) => {
    try {
        const player = new Gunner(newGunner);
        await player.save();
    } catch (error) {
        console.log(error)
    }
};

exports.listPlayers = async () => {
    const list = await Gunner.find()
    console.log(list)
};

exports.updatePlayer = async (updateObj) => {
    try {
        const query = { name: updateObj.filter} 
        await Gunner.findOneAndUpdate( query, 
            { $set: { team: updateObj.team, gooner: updateObj.gooner}} );
        } catch (error) {
        console.log(error)
    }

};

exports.deletePlayer = async (deleteObj) => {
    try {
        const query = { name: deleteObj.filter};
        await Gunner.findOneAndDelete(query)
    } catch (error) {
        console.log(error)
    }
}