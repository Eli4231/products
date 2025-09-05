const express =require('express');
const path =require('path');
const app = express();
const port =3500;
app.use(express.json());
app.use(express.static(path.join(__dirname)));
const products= [];
let nextID=1;

app.get('/',(req,res)=>{
res.sendFile(__dirname+'/index.html');
})

app.get('/p',(req,res)=>{
res.status(200).json(products)
})


app.listen(port,()=>{console.log(`http://localhost:${port}`)});