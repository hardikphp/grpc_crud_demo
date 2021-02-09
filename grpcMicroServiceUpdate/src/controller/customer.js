import client from "../../client";

const updateCustomer = async (req, res) => {
  try {
    let { body } = req;
    client.update(body, (err, data) => {
      if (err) {
        res.status(400).send({
          success: false,
          message: err.message,
        });
      }
      res.status(200).send({
        success: true,
        message: "Customer Update SuccessFully",
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
  updateCustomer,
};
