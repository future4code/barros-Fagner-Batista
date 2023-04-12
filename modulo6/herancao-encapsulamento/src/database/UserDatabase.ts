import { BaseDatabase } from "./BaseDatabase";
import { User } from "../models/User";
import { TABLE_USERS } from "./tableNames";

export class UserDatabase extends BaseDatabase{
    private static Labe_Users = "User_Arq"; 

    public async createUser(
        id: string,  
        email: string,
        password: string 
    ): Promise<void>{

        try{
            await this.getConnection()
            .insert({
                id, 
                email, 
                password,
        })
        .into((UserDatabase.Labe_Users))
            
        }catch(error){

        }
    }
}