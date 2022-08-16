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

    const findAllCustomer = async (page, size) => {
        try {

            const { count, rows } = await list(page, size);
            return { count, rows };
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