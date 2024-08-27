//실습1
import express, { NextFunction, Router, Request, Response } from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import {Customer, Product} from './types'
import databaseA from './database';
import {v4 as uuidv4} from 'uuid'

//실습2 (실습1 포함)
import CustomerModel from './models/customers';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import connectDB from './database';

//실습3 (실습1,2 포함)
import jwt, { VerifyErrors } from 'jsonwebtoken'


//고정
const app = express();
const PORT = 4000;
const router = Router();

app.use(bodyParser.json()) //app.use(express.json()) 도 가능

const corsOptions = {
    origin : '*',
    credential : true
}
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Hello World')
})

// const ranId = () => {
//     return  Math.floor(Math.random() * 1000);
// }


//실습3
const sec : string = process.env.TOKEN_SECRET as string;
const generateAccessToken = (username : any) => {
    return jwt.sign({username}, sec, {expiresIn: '600s'}) //SON Web Token을 생성. 600초
}

//auth
router.post('/api/v1/auth', (req, res) => {
    const token = generateAccessToken({username: req.body.username})
    res.json(token);
})


const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) {
        return res.status(401);
    }
    jwt.verify(token, sec, (err : VerifyErrors | null , decoded : any) => {
        if(err) {
            return res.status(403).json({msg : 'Forbidden', error: err.message})
        }
        (req as any) = decoded;
        // req.user = user
    })
    next();
}


router.get("/api/v1/customers", authenticateToken, async (req, res)=> {
    try {
        const customers = await CustomerModel.find();
        res.json(customers);
    }catch(error) {
        console.error('고객 조회 실패', error);
        res.status(500).json({error: '조회 중 오류가 발생했습니다'});
    }
})




//실습2
//mongoose connect
connectDB();
mongoose.connect(process.env.MONGODB_URL || '')
.then(() => console.log('mongodb 연결 완료')) 
.catch(err => {
    console.error('mongodb 연결 실패', err)
})

// router.get("/api/v1/customers", async (req, res)=> {
//     try {
//         const customers = await CustomerModel.find();
//         res.json(customers);
//     }catch(error) {
//         console.error('고객 조회 실패', error);
//         res.status(500).json({error: '조회 중 오류가 발생했습니다'});
//     }
// })


router.get("/api/v1/customers/:id", async (req, res)=> {
    try {
        const customer = await CustomerModel.findOne({id: req.params.id})
        if(!customer){
            return res.sendStatus(404);
        }
        res.json(customer);
    }catch(error) {
        console.error('고객 조회 실패', error);
        res.status(500).json({error: '조회 중 오류가 발생했습니다'});
    }
})



router.put("/api/v1/customers/:id", async(req, res) => {
    try{
        const customer = await CustomerModel.findByIdAndUpdate({id : req.params.id}, req.body, {new: true})
        if(!customer){
            return res.sendStatus(404);
        }
        res.json(customer);
    }catch(error){
        console.error('고객 정보 수정 오류', error);
        res.status(500).json({error: '고객 정보 수정 중 오류가 발생했습니다'});
    }
})

router.post("/api/v1/customers", async (req, res) => {
    const customer : Omit<Customer, 'id'> = req.body;
    if(!customer){
        return res.sendStatus(404);
    }
    const newCustomer = new CustomerModel( {
        id: uuidv4(),
        name: customer.name,
        address: customer.address,
        email: customer.email,
    })
    try{
        const savedCustomer = await newCustomer.save();
        res.status(201).json(savedCustomer);
    }catch(error){
        console.error('고객 저장 실패', error);
        res.status(500).json({error: '고객 저장 중 오류가 발생했습니다'});
    }
})


router.delete("/api/v1/customers/:id", async (req, res) => {
    try {
        const result = await CustomerModel.findOneAndDelete({id: req.params.id})
        res.status(200).json('고객 정보 삭제 완료')
    }catch(error){
        console.error('고객 삭제 실패' , error);
        res.status(500).json({error: '고객 정보 삭제 중 오류가 발생했습니다'});
    }
})

app.use(router);

app.listen({port : PORT}, () => {
    console.log(`localhost:${PORT}에서 실행`)
})




//실습1
// router.get("/api/v1/customers", (req, res)=> {
//     res.send(databaseA.customer);
// })


// router.get("/api/v1/customers/:id", (req, res)=> {
//     const customer = databaseA.customer.find(
//         (customer) => customer.id === req.params.id //req.params 객체는 URL 경로에 포함된 매개변수를 담고 있으며, 그 중 id라는 이름의 매개변수를 가져오는 것
//     )
//     if(typeof customer === 'undefined') {
//         res.sendStatus(404);
//     }else {
//         res.send(customer)
//     }
// })

// router.post("/api/v1/customers", (req, res) => {
//     const customer : Customer = req.body;
//     databaseA.customer.push({
//         // id: ranId(),
//         id: uuidv4(),
//         name: customer.name,
//         address: customer.address,
//         email: customer.email,
//     })
//     res.sendStatus(200);
// })

// router.put("/api/v1/customers/:id", (req, res) => {
//     const index = databaseA.customer.findIndex(
//         (customer) => customer.id === req.params.id
//     )
//     if(index != -1) {
//         const input = req.body;
//         const prev = databaseA.customer[index]
//         const customer = {
//             id: prev.id,
//             name: input.name, 
//             address: input.address,
//             email: input.email,
//         }
//         databaseA.customer[index] = customer;
//         res.sendStatus(200);
//     }else {
//         res.sendStatus(404);
//     }
// })


// router.delete("/api/v1/customers/:id", (req, res) => {
//     databaseA.customer = databaseA.customer.filter(
//         (customer) => customer.id != req.params.id
//     );
//     res.sendStatus(200);
// })


