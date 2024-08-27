import mongoose from "mongoose";
import { Customer } from '../types';
declare const CustomerModel: mongoose.Model<Customer, {}, {}, {}, mongoose.Document<unknown, {}, Customer> & Customer & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<Customer, mongoose.Model<Customer, any, any, any, mongoose.Document<unknown, any, Customer> & Customer & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Customer, mongoose.Document<unknown, {}, mongoose.FlatRecord<Customer>> & mongoose.FlatRecord<Customer> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default CustomerModel;
