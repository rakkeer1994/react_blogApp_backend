
const express=require("express")
const technologyRouter=express.Router()
const technologyControllers=require('../controllers/technology')
technologyRouter.route('/').get(technologyControllers.technologyDetails)
module.exports=technologyRouter