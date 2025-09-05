
const express = require('express');
const router =express.Router();
const multer =require('multer');
const fs =require('fs');

const products= [];
let nextId=1;

if(!fs.existsSync('uploads')){
    fs.mkdirSync('uploads');
}
const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/');
    },
    filename: (req,file,cb)=>{
        let id =req.params.id ? req.params.id : nextId;
        let finalFileName= `${id}${path.extname(file.originalname)}`;
        cb(null,finalFileName);
    }
});
const upload =multer({storage: storage});

router.get('/products',(req,res)=>{
res.status(200).json(products)
})

router.post('/',upload.single('myFile'),(req,res)=>{
     let id= nextId++;
     let name= req.body.name;
     let price = req.body.price;
     let filename=req.file ? req.file.fieldname:null;
     let product = {id,name,price:parseFloat(price),filename}
     let pro ={id,name,price,filename};
    products[id]= product;
res.status(201).json({message:"ok"})
})


module.exports=router;
