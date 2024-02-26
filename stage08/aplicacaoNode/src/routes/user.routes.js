const { Router } = require('express');
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require('../controllers/UsersController');
const UserAvatarController = require('../controllers/UserAvatarController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);


const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", ensureAuthenticated, usersController.update); // vc nao tinha passado o id como parametro na rota
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes

//exportando pra quem quiser usar o arquivo