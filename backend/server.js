import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
const PORT = process.env.PORT || 5050;

connectDB(); //Connect to MongoDB

const app = express(); 

app.get('/', (req, res) =>{
    res.send('API is running...');
});

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});