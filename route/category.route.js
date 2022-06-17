const express = require('express');
const categoryRouter = express.Router();
const categoryController= require('../Controller/category.controller')
const auth = require('../Middleware/authen.midlleware')

categoryRouter.post('/',auth, categoryController.create);
categoryRouter.get('/:id',auth, categoryController.findOne);
categoryRouter.get('/',auth, categoryController.findAll);
categoryRouter.put('/:id',auth, categoryController.update);
categoryRouter.delete('/:id',auth, categoryController.delete);


module.exports = categoryRouter