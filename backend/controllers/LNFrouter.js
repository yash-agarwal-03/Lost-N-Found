import express from "express";
import {FoundItem, LostTicket} from "../dbModels/LNFschema.js";

const LNFrouter=express.Router();

LNFrouter.post('/addLostTicket', async (req, res) => {
    console.log(req.body);

    try{
        const newTicket=new LostTicket(req.body)
        await newTicket.save();
        res.send(201).send("Ticket added to database");
    }
    catch(err){
        console.error("Error adding ticket to database", err);
        res.send("Error in saving ticket to database");
    }
    res.send(req.body);
});

LNFrouter.post('/addFoundItem', (req, res) => {
    console.log(req.body)
});

LNFrouter.get('/getFoundItems',(req,res)=>{
    res.send(foundItems);
});

export default LNFrouter;