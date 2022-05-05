


// import express from "express";

// // const bodyParser=require("body-parser")
// // import bodyParser from "body-parser";
// // import {tourismRouter} from "./routes/tourism";
// // import { tourismRouter } from "./routes/tourism";
// // const express=require("express")
// const app = express();
// const PORT = 5000;

// // app.use(bodyParser.json());

// // app.use("/tourism", tourismRouter);
// // app.get("/", (req, res) => res.send("Welcome to the Users API!"));
// // app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

// app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));


const express=require("express");
const cors = require("cors")
const app=express();

const mainRouter=require('./routes')
app.use(cors());

app.use("/api/v1", mainRouter)

app.listen(5000, ()=>{
    console.log("Application is started")})