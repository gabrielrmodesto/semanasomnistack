const Box = require('../model/Box');
const File = require('../model/Files');


class FileController {
    async store(req, res) {
        const box = await Box.findById(req.params.id);

        const file = await File.create({
            title: req.file.originalname,
            path: req.file.key
        });

        box.files.push(file);

        await box.save();

        req.io.sockets.in(box._id).emit("file",file);

        //Criar arquivo
        return res.json(file);
    }
}

module.exports = new FileController();