import express, { Request, Response }  from "express";

const app = express();
const port = 3001;


app.get('/', (req: Request, res: Response) => {
    res.send({message: "hello world"});
})

app.listen(port, () => {
    console.log(`Connected successfully on port ${port}`);
})