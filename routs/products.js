
const express = require('express');
const router =express.Router();
const multer =require('multer');
const path =require('path');
const fs =require('fs');

const products= [];
let nextId=1;

if(!fs.existsSync('images')){
    fs.mkdirSync('images');
}
const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'images/');
    },
    filename: (req,file,cb)=>{
        let id =req.params.id ? req.params.id : nextId;
        let finalFileName= `${id}${path.extname(file.originalname)}`;
        cb(null,finalFileName);
    }
});
const upload =multer({storage: storage});

router.get('/',(req,res)=>{
res.json(products)
})

router.post('/',upload.single('myFile'),(req,res)=>{
     let id= nextId++;
     let name= req.body.name;
     let price = parseFloat (req.body.price);
     let myFilename=req.file ? req.file.fieldname:null;
     let product = {id,name,price:parseFloat(price),filename}
     let pro ={id,name,price,myFilename};
    products[id]= product;
res.json({message:"ok"})
})


module.exports=router;
