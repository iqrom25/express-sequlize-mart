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
            
            if (!Number(page)) page = 1;
            if (!Number(size)) size = 2;
            
            const fixedPage = page;
            const fixedSize = size;

            const { count, rows } = await list(fixedPage, fixedSize);
            return { count, rows, fixedPage, fixedSize };

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