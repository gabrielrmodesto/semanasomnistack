const Dev = require('../model/Dev');

module.exports = {
    async store(req, res){
        const { devID } = req.params;
        const { user } = req.headers;

        const devLogado = await Dev.findById(user);
        const targetDev = await Dev.findById(devID);

        if(!targetDev){
            return res.status(400).json({error: 'Desenvolvedor inexistente'});
        }

        devLogado.dislikes.push(targetDev._id);

        await devLogado.save();

        return res.json(devLogado);
    }
};