const express = require('express');
const DesenvolvedorController = require('./controller/DesenvolvedorController');
const LikeController = require('./controller/LikeController');
const DislikeController = require('./controller/DislikeController');
const routes = express.Router();

routes.get('/devs', DesenvolvedorController.index);
routes.post('/devs', DesenvolvedorController.store);
routes.post('/devs/:devID/likes', LikeController.store);
routes.post('/devs/:devID/dislikes', DislikeController.store);
module.exports = routes;