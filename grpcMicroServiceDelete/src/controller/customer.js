import client from "../../client";

const removeCustomer = async (req, res) => {
  try {
    let { body } = req;
    client.remove(body, (err, data) => {
      if (err) {
        res.status(400).send({
          success: false,
          message: err.message,
        });
      }
      res.status(200).send({
        success: true,
        message: "Customer Deleted SuccessFully",
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
  removeCustomer,
};
