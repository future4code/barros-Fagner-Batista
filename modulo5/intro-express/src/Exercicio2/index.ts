import express from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

app.get("/", (req: any, res: { send: (arg0: string) => void }) => {          
    res.send("Hello from Express")
})