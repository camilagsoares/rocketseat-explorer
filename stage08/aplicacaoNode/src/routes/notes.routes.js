const { Router } = require('express');

const NotesController = require('../controllers/NotesController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');


const notesRoutes = Router();


const notesController = new NotesController()

notesRoutes.use(ensureAuthenticated);

notesRoutes.post("/:user_id", notesController.create);
notesRoutes.get("/", notesController.index);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);


module.exports = notesRoutes;

//exportando pra quem quiser usar o arquivo