import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import products from './data/products.js';
const PORT = process.env.PORT || 5050;

connectDB(); //Connect to MongoDB

const app = express(); 

app.get('/', (req, res) =>{
    res.send('API is running...');
});

//Get all products
app.get('/api/products', (req, res) => {
    res.json(products);
})

//Get the product with by id
app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});