"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//실습1
const express_1 = __importStar(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const uuid_1 = require("uuid");
//실습2 (실습1 포함)
const customers_1 = __importDefault(require("./models/customers"));
const mongoose_1 = __importDefault(require("mongoose"));
const database_1 = __importDefault(require("./database"));
//실습3 (실습1,2 포함)
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//실습4
const path_1 = __importDefault(require("path"));
//고정
const app = (0, express_1.default)();
const PORT = 4000;
const router = (0, express_1.Router)();
app.use(body_parser_1.default.json()); //app.use(express.json()) 도 가능
const corsOptions = {
    origin: '*',
    credential: true
};
app.use((0, cors_1.default)(corsOptions));
// app.get('/', (req, res) => {
//     res.send('Hello World')
// })
// const ranId = () => {
//     return  Math.floor(Math.random() * 1000);
// }
//실습4
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.static(path_1.default.join(__dirname, '../dist')));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'views', 'index.html'));
});
//실습3
const sec = process.env.TOKEN_SECRET;
const generateAccessToken = (username) => {
    return jsonwebtoken_1.default.sign({ username }, sec, { expiresIn: '600s' }); //SON Web Token을 생성. 600초
};
//auth
router.post('/api/v1/auth', (req, res) => {
    const token = generateAccessToken({ username: req.body.username });
    res.json(token);
});
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        return res.status(401);
    }
    jsonwebtoken_1.default.verify(token, sec, (err, decoded) => {
        if (err) {
            return res.status(403).json({ msg: 'Forbidden', error: err.message });
        }
        req = decoded;
        // req.user = user
    });
    next();
};
router.get("/api/v1/customers", authenticateToken, async (req, res) => {
    try {
        const customers = await customers_1.default.find();
        res.json(customers);
    }
    catch (error) {
        console.error('고객 조회 실패', error);
        res.status(500).json({ error: '조회 중 오류가 발생했습니다' });
    }
});
//실습2
//mongoose connect
(0, database_1.default)();
mongoose_1.default.connect(process.env.MONGODB_URL || '')
    .then(() => console.log('mongodb 연결 완료'))
    .catch(err => {
    console.error('mongodb 연결 실패', err);
});
// router.get("/api/v1/customers", async (req, res)=> {
//     try {
//         const customers = await CustomerModel.find();
//         res.json(customers);
//     }catch(error) {
//         console.error('고객 조회 실패', error);
//         res.status(500).json({error: '조회 중 오류가 발생했습니다'});
//     }
// })
router.get("/api/v1/customers/:id", async (req, res) => {
    try {
        const customer = await customers_1.default.findOne({ id: req.params.id });
        if (!customer) {
            return res.sendStatus(404);
        }
        res.json(customer);
    }
    catch (error) {
        console.error('고객 조회 실패', error);
        res.status(500).json({ error: '조회 중 오류가 발생했습니다' });
    }
});
router.put("/api/v1/customers/:id", async (req, res) => {
    try {
        const customer = await customers_1.default.findByIdAndUpdate({ id: req.params.id }, req.body, { new: true });
        if (!customer) {
            return res.sendStatus(404);
        }
        res.json(customer);
    }
    catch (error) {
        console.error('고객 정보 수정 오류', error);
        res.status(500).json({ error: '고객 정보 수정 중 오류가 발생했습니다' });
    }
});
router.post("/api/v1/customers", async (req, res) => {
    const customer = req.body;
    if (!customer) {
        return res.sendStatus(404);
    }
    const newCustomer = new customers_1.default({
        id: (0, uuid_1.v4)(),
        name: customer.name,
        address: customer.address,
        email: customer.email,
    });
    try {
        const savedCustomer = await newCustomer.save();
        res.status(201).json(savedCustomer);
    }
    catch (error) {
        console.error('고객 저장 실패', error);
        res.status(500).json({ error: '고객 저장 중 오류가 발생했습니다' });
    }
});
router.delete("/api/v1/customers/:id", async (req, res) => {
    try {
        const result = await customers_1.default.findOneAndDelete({ id: req.params.id });
        res.status(200).json('고객 정보 삭제 완료');
    }
    catch (error) {
        console.error('고객 삭제 실패', error);
        res.status(500).json({ error: '고객 정보 삭제 중 오류가 발생했습니다' });
    }
});
app.use(router);
app.listen({ port: PORT }, () => {
    console.log(`localhost:${PORT}에서 실행`);
});
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
