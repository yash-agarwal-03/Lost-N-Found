import express from "express";
import fs from "fs";


const app = express();
const PORT = 5000;


const FILE_PATH_LOST="./data/lostItems.json";
let lostTickets=fs.readFileSync(FILE_PATH_LOST, "utf-8");
lostTickets=JSON.parse(lostTickets);

const FILE_PATH_FOUND="./data/foundItems.json";
let foundItems=fs.readFileSync(FILE_PATH_FOUND, "utf-8");
app.use(express.json());

app.get("/",(req,res)=>{
    const data={
        lostTickets: JSON.parse(lostTickets),
        foundItems: JSON.parse(foundItems)
    };
    res.json(data);
    // res.send(lostTickets);
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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    });