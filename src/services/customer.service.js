const CustomerService = (CustomerRepository) => {

    const { create,
        list,
        getById,
        update,
        remove } = CustomerRepository();

    const registerNewCustomer = async (payload) => {
        try {

            return await create(payload);

        } catch (error) {
            return error.message;
        }
    };

    const findAllCustomer = async () => {
        try {

            return await list();
        } catch (error) {
            return error.message;
        }
    };

    return {
        registerNewCustomer,
        findAllCustomer
    };
};

export default CustomerService;