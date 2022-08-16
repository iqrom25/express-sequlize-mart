import Customer from '../models/customer.js'
import { Op } from 'sequelize';

const CustomerRepository = (db) => {

    const create = async (payload) => {
        try {
            return await Customer(db).create(payload);

        } catch (error) {
            return error.message;
        }
    };

    const list = async (page, size, sortBy, sortType, keyword) => {

        try {
            const offset = size * (page - 1);
            const { count, rows } = await Customer(db).findAndCountAll({

                where: {
                    [Op.or]: [
                        { name: { [Op.iLike]: `%${keyword}%` } },
                        { address: { [Op.iLike]: `%${keyword}%` } },
                        { phone: { [Op.iLike]: `%${keyword}%` } },
                        { email: { [Op.iLike]: `%${keyword}%` } }
                    ]
                },
                offset,
                limit: size,
                order: [
                    [sortBy, sortType]
                ]
            });
            return { count, rows };
        } catch (error) {
            return error.message;
        }
    };

    const getById = async (id) => {
        try {

            const customer = await Customer(db).findByPk(id)

            if (!customer) return `Customer with ID ${id} is not found !`;

            return customer;
        } catch (error) {
            return error.message;
        }

    }

    const update = async (payload) => {


        try {
            const customer = await Customer(db).findByPk(payload.id)

            if (!customer) return `Customer with ID ${id} is not found !`;

            await Customer(db).update(payload, { where: { id: payload.id } });

            const updatedCustomer = await getById(payload.id)

            return updatedCustomer;

        } catch (error) {

            return error.message;
        }


    }

    const remove = async (id) => {

        try {
            const result = await Customer(db).destroy({ where: { id } });

            if (result === 0 ) return `Customer with ID ${id} is not found !`;

            return result
            
        } catch (error) {
            return error.message;
        }
    }


    return {
        create,
        list,
        getById,
        update,
        remove
    };

};

export default CustomerRepository;