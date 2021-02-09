import { Schema, model } from "mongoose";

const customerSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    address: { type: String },
  },
  { timestamps: true, versionKey: false }
);

const Customer = new model("Customer", customerSchema);

export default Customer;
