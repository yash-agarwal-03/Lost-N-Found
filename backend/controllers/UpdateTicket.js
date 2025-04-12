import express from "express";
import {LostTicket} from "../dbModels/LNFschema.js";

const UpdateRouter = express.Router();

UpdateRouter.put("/:id", async (req, res) => {
    const id=req.params.id;
    const {status} = req.body;
    console.log("Updating ticket with ID:", id, "to status:", status);
    try{
        const response=await LostTicket.findByIdAndUpdate(id,{status},{new:true});
        res.json(response);
    }
    catch(err){
        console.error("Error updating ticket",err);
        res.status(500).send(`Error updating ticket${err}`);
    }
});
export default UpdateRouter;