import { Router } from "express";
import UsersController from "../controllers/UsersController.js";

const usersRoutes = Router();


function myMiddleware(request, response, next) {
    console.log("Você passou pelo middleware");

    if (!request.body.isAdmin) {
        return response.json({ message: "user unauthorized" });
    }
    next();
}






const usersController = new UsersController()

usersRoutes.post("/", myMiddleware, usersController.create);

export default usersRoutes;

//exportando pra quem quiser usar o arquivo