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

    const findAllCustomer = async (page, size, sortBy, sortType) => {
        try {



            if (!Number(page)) page = 1;
            if (!Number(size)) size = 2;

            if (!(sortBy === 'name' || sortBy === 'address' || sortBy === 'phone' || sortBy === 'email' || sortBy === 'name' || sortBy === 'balance')) {
                sortBy = 'created_at';
            }

            if (!(sortType.toLowerCase() === 'asc' || sortType.toLowerCase() === 'desc')) { 
                sortType = 'asc'; 
              
            }

            const { count, rows } = await list(page, size, sortBy, sortType);
            return { count, rows, page, size, sortBy, sortType };

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