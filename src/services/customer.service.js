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

    const findAllCustomer = async (page, size, sortBy, sortType, keyword) => {
        try {
            if (!Number(page)) page = 1;
            if (!Number(size)) size = 2;

            if (!(sortBy === 'name' || sortBy === 'address' || sortBy === 'phone' || sortBy === 'email' || sortBy === 'balance')) {
                sortBy = 'created_at';
            }

            if (!(sortType.toLowerCase() === 'asc' || sortType.toLowerCase() === 'desc')) {
                sortType = 'asc';

            }

            if (!keyword) keyword = '';

            const { count, rows } = await list(page, size, sortBy, sortType, keyword);
            return { count, rows, page, size, sortBy, sortType };

        } catch (error) {
            return error.message;
        }
    };

    const findCustomerById = async (id) => {
        try {
            return await getById(id);
        } catch (error) {
            return error.message;
        }
    };

    const removeCustomer = async (id) => {
        try {
            return await remove(id);
        } catch (error) {
            return error.message;
        }
    }

    const updateOldCustomer = async (payload) => {
        try {
            return await update(payload);
        } catch (error) {
            return error.message;
        }
    }

    return {
        registerNewCustomer,
        findAllCustomer,
        findCustomerById,
        updateOldCustomer,
        removeCustomer
    };
};

export default CustomerService;