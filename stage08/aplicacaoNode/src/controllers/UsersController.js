import AppError from "../utils/AppError.js";


class UsersController {
    create(request,response){
        const {name,email,password} = request.body;
        
        response.status(201).json({name,email,password})
    }
}

export default UsersController;