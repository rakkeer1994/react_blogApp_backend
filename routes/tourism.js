
const express=require("express")
const tourismRouter=express.Router();
const tourismControllers=require("../controllers/tourism")
tourismRouter.route('/').get(tourismControllers.tourismDetails)
module.exports=tourismRouter
