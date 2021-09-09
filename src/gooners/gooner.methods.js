const Gooner = require("./gooner.model");

exports.addPLayer = async (newGooner) => {
    try {
        const player = new Gooner(newGooner);
        await player.save();
    } catch (error) {
        console.log(error)
    }
}