import Customer from "../../models/customer.js";
import User from "../../models/user.js";
import Address from "../../models/address.js";

const Migration = async (db) => {

   const customer = Customer(db);
   const user = User(db);
   const address = Address(db);
   customer.hasOne(user);
   user.belongsTo(customer);
   customer.hasMany(address);
   address.belongsTo(customer);

   await db.sync({alter:true});


};

export default Migration;