import { sequelize, DataTypes } from "./sequelize.js";
import Customer from "../../models/customer.js";

const customer = Customer(sequelize, DataTypes);

export { customer };