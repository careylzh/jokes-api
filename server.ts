import express, { Request, Response } from "express"

const app = express();

//root endpoint. Request and Response are Express types
app.get('/', (req: Request, res: Response) => {
 res.json( {message: 'root endpt called'})
})

app.listen(3001)