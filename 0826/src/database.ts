

//import {Customer, Product} from './types'
// const customer : Customer[] = [
//     {id: '1', name: 'eunjju', address:'abcabc', email: "eee@eee", description : '222222'},
//     {id: '2', name: 'eunjju', address:'abcabc', email: "eee@eee", description : '222222'},
//     {id: '3', name: 'eunjju', address:'abcabc', email: "eee@eee", description : '222222'}
// ]

// const product : Product[] = [
//     {id: 1, name: 'product1', description: 'product1', price : 1000},
//     {id: 2, name: 'product2', description: 'product2', price : 2000},
//     {id: 3, name: 'product3', description: 'product3', price : 3000}
// ]


// const databaseA = {
//     customer,
//     product
// }

// export default databaseA;

//mongoDB
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async() => {
    try {
        mongoose.connect(process.env.MONGODB_URL || '');
        console.log('MongoDB 연결 됨');
    }catch(error) {
        console.error('MongoDB 연결 안됨', error);
    }
}

export default connectDB