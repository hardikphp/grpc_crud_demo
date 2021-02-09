import express from "express";
import { customerController } from "../controller";
import { INTERNAL_LINKS } from "../enum";

export default express
  .Router()
  .delete(
    INTERNAL_LINKS.CUSTOMER.DELETE_CUSTOMER,
    customerController.removeCustomer
  );
