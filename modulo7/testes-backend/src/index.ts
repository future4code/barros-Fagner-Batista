import app from "./database/app";
import { getUserById } from "./endpoints/getUserById";
import connection from "./database/connection";


app.get("/users/profile/:id", getUserById)












app.listen(3306, () => {
    console.log("Servidor rodando na porta 3003");
});
