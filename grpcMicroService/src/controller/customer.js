import client from "../../client";

const addCustomer = async (req, res) => {
  try {
    let { body } = req;
    client.insert(body, (err, data) => {
      if (err) {
        res.status(400).send({
          success: false,
          message: err.message,
        });
      }
      res.status(200).send({
        success: true,
        message: "Customer Add SuccessFully",
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
  addCustomer,
};
