import Response from "../../utils/response.js";

const CustomerController = (customerService) => {

    const { findAllCustomer, registerNewCustomer } = customerService();


    const create = async (req, res) => {

        try {

            const newCustomer = await registerNewCustomer(req.body);
            res.send(Response().successMessage(res.statusCode, 'SUCCESS', newCustomer));
        } catch (error) {
            res.status(500).send(Response().errorMessage(res.statusCode, error.message));
        }
    };

    const list = async (req, res) => {

        try {

            const { page, size, sortBy, sortType } = req.query;
            
            const { count, rows, page: fixedPage, size: fixedSize, sortBy: fixedSortBy, sortType: fixedSortType } = await findAllCustomer(page, size, sortBy, sortType);

            res.send(Response().pagination(res.statusCode, 'SUCCESS', rows, +fixedPage, count, +fixedSize, fixedSortBy, fixedSortType));
        } catch (error) {
            res.status(500).send(Response().errorMessage(res.statusCode, error.message));
        }
    };

    return {
        create,
        list
    };

};

export default CustomerController;