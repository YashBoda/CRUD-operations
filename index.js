const mongoose=require('mongoose')
const express=require('express')
const Product=require('./models/product.model')
const productRoute=require('./routes/product.routes.js')

const app=express()

app.use(express.json())

app.get('/',(req,res)=>{

    res.send("Hello from Node API server")
})

app.use('/api/products',productRoute)

//getting a product
// app.get('/api/products/:id',async(req,res)=>{
    
//     try{

//         const {id}=req.params

//         const product= await Product.findById(id)
//         res.status(200).json(product)
//     }
//     catch(err){

//         res.status(500).json({message:err.message})
//     }
// })


// app.post('/api/products',async(req,res)=>{
    
//     try{

//         const product= await Product.create(req.body)
//         res.status(200).json(product)
//     }
//     catch(err){

//         res.status(500).json({message:err.message})
//     }
// })

// app.put('/api/products/:id', async (req,res)=>{

//     // console.log(id)
//     try{
//         const {id} =req.params

//         const product= await Product.findByIdAndUpdate(id,req.body)

//         if(!product){

//             return res.status(404).json({message:"Product not found"})
//         }
        
//         const updatedProduct=await Product.findById(id)

//         res.status(200).json(updatedProduct)
//     }
//     catch(err){
//         console.log("error hai")
//         res.status(500).json({message: err.message})
//     }
// })

// app.delete('/api/products/:id', async (req,res)=>{


//     try{
//         const {id} =req.params

//         const product= await Product.findByIdAndDelete(id)

//         if(!product){

//             return res.status(404).json({message:"Product not found"})
//         }
        
//         res.status(200).json({message:"Product deleted successfully"})
//     }
//     catch(err){
//         console.log("error hai")
//         res.status(500).json({message: err.message})
//     }
// })


mongoose.connect('mongodb+srv://bodayash5:ZmF8K48zBMV4uxiv@backenddb.zyogqpo.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {
    console.log('Connected to the Database!')
    app.listen(3000,()=>{
        console.log("Listening on port 3000")
    })
})
  .catch(()=>{
    console.log("Connection  failed")
  });