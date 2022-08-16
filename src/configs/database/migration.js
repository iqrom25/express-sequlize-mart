import Customer from "../../models/customer.js";
import User from "../../models/user.js";
import Address from "../../models/address.js";
import Product from "../../models/product.js";

const Migration = async (db) => {

   const customer = Customer(db);
   const user = User(db);
   const address = Address(db);
   const product = Product(db);
   customer.hasOne(user);
   user.belongsTo(customer);
   customer.hasMany(address);
   address.belongsTo(customer);

   customer.belongsToMany(product, { through: 'CustomerProduct' });
   product.belongsToMany(customer, { through: 'CustomerProduct' });


   await db.sync({ alter: true });


};

export default Migration;