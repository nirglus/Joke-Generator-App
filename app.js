import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev";

app.use(bodyParser.urlencoded({ extended: true}))
app.get("/", (req, res) =>{
    res.render("index.ejs");
});

app.listen(port, () =>{
    console.log(`Server is up and running on ${port}`);
});