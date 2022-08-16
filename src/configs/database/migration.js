import Customer from "../../models/customer.js";
import User from "../../models/user.js";

const Migration = async (db) => {

   const customer = Customer(db);
   const user = User(db);
   await customer.hasOne(user);
   await user.belongsTo(customer);

   await db.sync({alter:true})
};

export default Migration;