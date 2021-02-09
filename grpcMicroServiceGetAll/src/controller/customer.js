import client from "../../client";

const getAllCustomers = async (req, res) => {
  try {
    client.getAll(null, (err, data) => {
      if (err) {
        res.status(400).send({
          success: false,
          message: err.message,
        });
      }
      res.status(200).send({
        success: true,
        customers: data.customers,
      });
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};

export default {
  getAllCustomers,
};
