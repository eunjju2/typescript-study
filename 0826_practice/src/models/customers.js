"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var uuid_1 = require("uuid");
var customerSchema = new mongoose_1.default.Schema({
    id: { type: String, default: uuid_1.v4 },
    name: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: false }
});
var CustomerModel = mongoose_1.default.model('customers', customerSchema, 'customers');
exports.default = CustomerModel;
