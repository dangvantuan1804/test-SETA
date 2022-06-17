const express = require('express');
const authorRouter = express.Router();
const authorController = require('../Controller/author.controller')
const auth = require('../Middleware/authen.midlleware')

authorRouter.post('/',auth, authorController.create);
authorRouter.get('/:id',auth, authorController.findOne);
authorRouter.get('/',auth, authorController.findAll);
authorRouter.put('/:id',auth, authorController.update);
authorRouter.delete('/:id',auth ,authorController.delete);

module.exports = authorRouter