
const express=require("express")
const fitnessRouter=express.Router()
const fitnessControllers=require('../controllers/fitness')
fitnessRouter.route('/').get(fitnessControllers.fitnessDetails)
module.exports=fitnessRouter