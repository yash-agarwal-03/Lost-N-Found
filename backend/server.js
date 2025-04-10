import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());

const FILE_PATH_LOST="./data/lostItems.json";
let lostTickets=JSON.parse(fs.readFileSync(FILE_PATH_LOST, "utf-8"));

const FILE_PATH_FOUND="./data/foundItems.json";
let foundItems=JSON.parse(fs.readFileSync(FILE_PATH_FOUND, "utf-8"));

app.get("/",(req,res)=>{
    const data={
        lostTickets:lostTickets,
        foundItems: foundItems
    };
    // res.json(data);
    res.send(data);
});
app.post('/addLostTicket', (req, res) => {
    console.log(req.body);
    lostTickets.push(req.body);
    fs.writeFileSync(FILE_PATH_LOST, JSON.stringify(lostTickets,null,2), "utf-8");
    res.send(req.body);
});

app.post('/addFoundItem', (req, res) => {
    console.log(req.body)
});

app.get('/getFoundItems',(req,res)=>{
    res.send(foundItems);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});