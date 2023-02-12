const dotenv = require ("dotenv").config();
const express =require ("express");
const mongoose = require("mongoose");
const connectDB = require ("./config/connectDB");
const { create } = require("./models/taskModel");
const taskRoute = require("./routes/taskRoute")
const cors = require("cors");


const app = express();

//Middleware
app.use(cors({
    origin: ["http://localhost:3000", "http://task-app-mern-fahim.onrender.com/"],}
));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api/tasks", taskRoute);

// const logger = (req, res, next) => {
//     console.log("Middleware ran");
//     next();
// };

//Routes
app.get("", (req,res) =>{
    res.send("Home page")
});

const PORT =process.env.PORT || 4000;


const startServer = async () =>{
    try{
        await connectDB();
        app.listen(PORT, ()=>{ console.log(`Server running on the port ${PORT}`)});
    }catch (error){
        console.log(error)
    }
};
startServer();

