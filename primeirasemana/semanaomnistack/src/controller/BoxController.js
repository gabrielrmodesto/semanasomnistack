const Box = require('../model/Box');

class BoxController{
    async store(req, res){
        const box = await Box.create({ title : req.body.title });
        return res.json(box);
    }
    //metodo para mostrar os arquivos
    async show(req, res){
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: {
                sort: {
                    createAt: -1
                }
            }
        });

        return res.json(box);
    }

}

module.exports = new BoxController();