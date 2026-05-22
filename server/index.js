const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const authRoute=require("./routes/auth");
const quizRoute=require("./routes/quiz");

const app=express();

app.use(express.json());
app.use(cors());

mongoose.connect(
"mongodb://127.0.0.1:27017/quizdb"
);

app.use("/auth",authRoute);
app.use("/quiz",quizRoute);

app.get("/",(req,res)=>{
res.send("Server Running");
});

app.listen(5000,()=>{
console.log("Server Started");
});