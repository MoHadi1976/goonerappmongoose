const Gunner = require("./gooner.model");

exports.addPlayer = async (newGunner) => {
    try {
        const player = new Gunner(newGunner);
        await player.save();
    } catch (error) {
        console.log(error)
    }
}

exports.listPlayers = async () => {
    const list = await Gunner.find()
    console.log(list)
};