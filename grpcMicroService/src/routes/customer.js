import express from "express";
import { customerController } from "../controller";
import { INTERNAL_LINKS } from "../enum";

export default express
  .Router()
  .post(INTERNAL_LINKS.CUSTOMER.ADD_CUSTOMER, customerController.addCustomer);
