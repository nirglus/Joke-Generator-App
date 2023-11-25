import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev/joke/Any";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}))
app.get("/", (req, res) =>{
    res.render("index.ejs");
});

app.post("/", async (req, res) =>{
    console.log(req.body);
    const singleChecked = req.body.type === "single";
    const twopartChecked = req.body.type === "twopart";
    let type = "";
    if (singleChecked && !twopartChecked) {
      type = "type=single";
    } else if (!singleChecked && twopartChecked) {
      type = "type=twopart";
    }
    try {
        const result = await axios.get(API_URL + "")
    } catch (error) {
        
    }
})

app.listen(port, () =>{
    console.log(`Server is up and running on ${port}`);
});