import express, { Request, Response } from "express"
import { Prisma, PrismaClient } from "@prisma/client";

const app = express();
var port = 3001;
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const prisma = new PrismaClient(); //prisma client is generated when you run a migration; we are instantiating it here


//root endpoint. Request and Response are Express types
app.get('/', (req: Request, res: Response) => {
 res.json( {message: 'root endpt called'})
})

//get all users
app.get('/users', async (req: Request, res: Response) => {
    var users = await prisma.user.findMany();
    res.json( {users: users})
   })

// get all jokes
app.get('/jokes', async (req: Request, res: Response) => {
    var jokes = await prisma.joke.findMany();
    res.json( {jokes: jokes})
   })

//create user
app.post('/user', async (req: Request, res: Response) => {
    await prisma.user.create({data:{}});
    res.json( {message: "user created successully!"})
   })

//get a joke
app.get('/joke/:id', async (req: Request, res: Response) => {
    const jokeId = req.params.id;
    var joke = await prisma.joke.findUnique({where: {id: jokeId}});
    res.json( {joke: joke})
   })

//create a single joke
app.post('/joke' ,async (req: Request, res: Response) => {
    const userId = req.body.userId; 
    const textParam = req.body.text;
    await prisma.joke.create({data: {text: textParam, userId: userId}});
    res.json( {message: "joke created successully!"})
   })

//delete a joke
app.delete('/joke/:id', async (req: Request, res: Response) => {
    const jokeID = req.params.id; 
    await prisma.joke.delete({where: {id: jokeID}});
    res.json( {message: "joke deleted successully!"})
   })
app.listen(port, ()=> {console.log(`Server started successfully on port ${port}`)});