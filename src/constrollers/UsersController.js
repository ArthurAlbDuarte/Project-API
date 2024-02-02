const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");
const sqliteContection = require("../database/sqlite");

class UsersController {
 async create ( request, response ) 
        {
        const { name, email, password} = request.body;

        const database = await sqliteContection();
        const checkUserExists = await database.get("Select * FROM users WHERE email = (?)", [email]);
        if(checkUserExists){
            throw new AppError("Este e-mail já está em uso.");
        }

        const hasehdPassword = await hash(password, 8 );

        await database.run(
            "INSERT INTO users(name, email, password) VALUES  (?, ?, ?)",
            [ name, email, hasehdPassword ]
            )
            return response.status(201).json();
    } 
}

module.exports = UsersController;