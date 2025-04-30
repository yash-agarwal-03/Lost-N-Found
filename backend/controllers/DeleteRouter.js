import express from "express";
import {LostTicket,FoundItem} from "../dbModels/LNFschema.js";

const DeleteRouter=express.Router();

DeleteRouter.delete("/lostTicket/:id",async(req,res)=>{
    const id =req.params.id;
    console.log("ticket id: ",id);

    try{
        const response=await LostTicket.findByIdAndDelete(id);
        
        if(!response)
            {
                console.log("ticket not found");
                return res.status(404).json({"status":false, "message":"Ticket not found"});
            }    
        

        return res.json({"status":true,"message":"Ticket deleted successfully"});
    }
    catch(err){
        console.log("Error in deleting lostTicket",err);
        return res.status(500).json({"status":false, "message":"Internal Server Error"});
    }
})
DeleteRouter.delete("/foundItem/:id",async(req,res)=>{
    const id=req.params.id;
    console.log("Ticket id:",id);

    try{
        const response= await FoundItem.findByIdAndDelete(id);
        if(!response)
        {
            console.log(`Item by id ${id} not found`);
            return res.status(404).json({"status":false, "message":"Item not found"})
        }
        return res.json({"status":true, "message":"Item deleted successfully"})
    }
    catch(err){
        console.log("Error in deleting found item:",err);
        return res.status(500).json({"status":false, "message":"Internal Server Error"})
    }
})
export default DeleteRouter;