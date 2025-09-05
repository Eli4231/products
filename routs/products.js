const express = require('express');
const router =express.Router();

const products= [];


router.get('/products',(req,res)=>{
res.status(200).json(products)
})
module.exports=router;
