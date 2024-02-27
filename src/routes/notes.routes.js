const { Router } = require('express')

const NotesController = require('../controllers/NotesController')

const notesRoutes = Router()

const notesController = new NotesController()

usersRoutes.get('/', notesController.index)
usersRoutes.post('/:user_id', notesController.create)
notesRoutes.get('/:id', notesController.show)
notesRoutes.delete('/:id', notesController.delete)


module.exports = notesRoutes;
