import express, {Request, Response} from  "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Servidor executando na porta 3003");
});

app.get("teste/id", (req: Request, res: Response)=>{
    const id = req.params.id
    const pasword = req.headers. pasword
    const name = req.body
})