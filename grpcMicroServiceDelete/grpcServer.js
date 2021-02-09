const PROTO_PATH = "crud.proto";

var grpc = require("grpc");
var protoLoader = require("@grpc/proto-loader");
import { customerModel } from "./src/models";

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});

var customersProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

server.addService(customersProto.CustomerService.service, {
  insert: async (call, callback) => {
    let customer = call.request;
    let data = new customerModel(customer);
    let newData = await data.save();
    callback(null, newData);
  },
  getAll: async (_, callback) => {
    let data = await customerModel.find();
    callback(null, { customers: data });
  },
  update: async (call, callback) => {
    let data = await customerModel.findOneAndUpdate(
      { _id: call.request.id },
      call.request
    );
    callback(null, data);
  },
  remove: async (call, callback) => {
    let removeData = await customerModel.findOneAndDelete({
      _id: call.request.id,
    });
    callback(null, {});
  },
});

server.bind("127.0.0.1:30046", grpc.ServerCredentials.createInsecure());
console.log("Server running at http://127.0.0.1:30046");
server.start();
