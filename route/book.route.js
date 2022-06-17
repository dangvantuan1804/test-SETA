const express = require('express');
const bookRouter = express.Router();
const bookController = require('../Controller/book.controller')
const auth = require('../Middleware/authen.midlleware')

bookRouter.post('/',auth, bookController.create);
bookRouter.get('/:id',auth, bookController.findOne);
bookRouter.get('/',auth, bookController.findAll);
bookRouter.put('/:id',auth, bookController.update);
bookRouter.delete('/:id',auth, bookController.delete);

module.exports = bookRouter