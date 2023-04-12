import { Request, Response } from "express"
import connection from "../database/connection"
import app from "../database/app";
import { send } from "process";


export  const getUserById = async(req: Request, res:Response) =>{

    let error = 400 

 

    try{

   const id = req.params.id;

        const user = await connection 
        .from('User_Arq')
        .select('id')
        .where({id})
        .first()

        if(!user){
          return res.status(200).send(user)
        }else{
           return  res.status(404).send({message: 'Usuário não encontrado'})
        }


    }catch(error: any){
        console.error(error)
        res.status(500).send({message: 'Erro ao buscar usuário'})

    }



}