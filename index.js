import express from 'express'


const app = express();

app.use(express.json())


app.listen(5000,console.log("you are on port 5000"))