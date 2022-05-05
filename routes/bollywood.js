
const express=require("express")
const bollywoodRouter=express.Router()
const bollywoodControllers=require('../controllers/bollywood')
bollywoodRouter.route('/').get(bollywoodControllers.bollywoodDetails)
module.exports=bollywoodRouter