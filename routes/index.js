const express=require("express")
const router=express.Router()

const tourismRouter=require("./tourism")
const fitnessRouter=require("./fitness")
const technologyRouter=require("./technology")
const bollywoodRouter=require("./bollywood")
const foodRouter=require("./food")


router.use("/tourism", tourismRouter)
router.use("/fitness", fitnessRouter)
router.use("/technology", technologyRouter)
router.use("/bollywood", bollywoodRouter)
router.use("/food", foodRouter)
module.exports=router