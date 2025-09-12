const express =require('express');
const app = express();
const port =3500;
app.use(express.static(__dirname));





//routers
app.get('/',(req,res)=>{
res.sendFile(__dirname+'public/index.html');
})
const products =require('./routs/products')
app.use('/products',products);



//start
app.listen(port,()=>{console.log(`http://localhost:${port}`)});