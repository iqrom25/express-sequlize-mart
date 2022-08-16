import User from '../models/user.js'
import Customer from '../models/customer.js';
import { hashPassword } from '../utils/password.utils.js';
import { Op } from 'sequelize';

const UserRepository = (db) => {

    const customer = Customer(db);
    const user = User(db);
    customer.hasOne(user);
    user.belongsTo(customer);

    const create = async (payload) => {
        try {

            const password = await hashPassword(payload.password);


            await user.create({
                username: payload.username,
                password: password,
                customerId: payload.customerId
            });

            return await user.findOne({ where: { customerId: payload.customerId }, include: { model: customer } });

        } catch (error) {
            return error.message;
        }
    };

    const list = async () => {
        try {
            return await user.findAll({
                 include: {
                    model:customer, 
                    attributes:['id','name','address']
                },
                attributes:{
                    exclude:['password']
                }
         });
        } catch (error) {
            return error.message;
        }
    }



    return {
        create,
        list
    };

};

export default UserRepository;