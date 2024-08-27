"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const uuid_1 = require("uuid");
const customerSchema = new mongoose_1.default.Schema({
    id: { type: String, default: uuid_1.v4 },
    name: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: false }
});
const CustomerModel = mongoose_1.default.model('customers', customerSchema, 'customers');
exports.default = CustomerModel;
