
const express=require("express")
const foodRouter=express.Router()
const foodControllers=require('../controllers/food')
foodRouter.route('/').get(foodControllers.foodDetails)
module.exports=foodRouter