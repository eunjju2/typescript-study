import express, {Router} from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import {Customer} from './types'
import {v4 as uuidv4} from 'uuid'
import CustomerModel from './models/customers';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import connectDB from './database';
import path from 'path';

const app = express();
const PORT = 3000;
const router = Router();

app.use(bodyParser.json())

const corsOptions = {
    origin : '*',
    credential : true
}
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, '..')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
})

dotenv.config();
connectDB();
mongoose.connect(process.env.MONGODB_URL || '')
.then(() => console.log('mongodb 연결 완료')) 
.catch(err => {
    console.error('mongodb 연결 실패', err)
})


router.post("/api/v1/customers", async (req, res) => {
    const customer : Omit<Customer, 'id'> = req.body;
    console.log(req.body)
    if(!customer){
        return res.sendStatus(404);
    }
    const newCustomer = new CustomerModel( {
        id: uuidv4(),
        name: customer.name,
        address: customer.address,
        email: customer.email
    })
    try{
        const savedCustomer = await newCustomer.save();
        res.status(201).json(savedCustomer);
    }catch(error){
        console.error('고객 저장 실패', error);
        res.status(500).json({error: '고객 저장 중 오류가 발생했습니다'});
    }
})


app.use(router);

app.listen({port : PORT}, () => {
    console.log(`localhost:${PORT}에서 실행`)
})

