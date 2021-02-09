import express from "express";
import { customerController } from "../controller";
import { INTERNAL_LINKS } from "../enum";

export default express
  .Router()
  .get(
    INTERNAL_LINKS.CUSTOMER.GET_ALL_CUSTOMERS,
    customerController.getAllCustomers
  );
