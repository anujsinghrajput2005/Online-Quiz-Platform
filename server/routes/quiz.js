const express=require("express");

const router=express.Router();

router.get("/",(req,res)=>{

res.send("Quiz Route Working");

});

module.exports=router;