import Customer from '../models/customer.js'

const CustomerRepository =  (db) => {

    const create = async (payload) => {
        try {
           return await Customer(db).create(payload);

        } catch (error) {
            return error.message;
        }
    };

    const list = async () => {

        try {
            return await Customer(db).findAll();
        } catch (error) {
            return error.message;
        }
    };

    const getById = async (id) => {
        try {

        } catch (error) {
            return error.message;
        }

    }

    const update = async (id, payload) => {


        try {


        } catch (error) {

            return error.message;
        }


    }

    const remove = async (id) => {

        try {

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