import mongoose from "mongoose";
import {Customer} from '../types'
import {v4 as uuidv4} from 'uuid'

const customerSchema = new mongoose.Schema<Customer>({
    id : {type :String, default : uuidv4},
    name : {type :String, required : true},
    address : {type :String, required : true},
    email : {type :String, required : true},
    description : {type :String, required : false}
})

const CustomerModel = mongoose.model('customers', customerSchema, 'customers');


export default CustomerModel;