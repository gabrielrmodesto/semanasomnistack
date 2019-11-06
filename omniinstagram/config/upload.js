const multer = require('multer');
const path = require('path');

module.exports = {
	//salvar imagens dentro do projeto
	storage: new multer.diskStorage({
		destination: path.resolve(__dirname, '..','uploads'),
		filename: function(req, file, cb){
			cb(null, file.originalname);
		}
	})
};