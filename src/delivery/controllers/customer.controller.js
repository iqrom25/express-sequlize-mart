import Response from "../../utils/response.js";

const CustomerController = (customerService) => {

    const { registerNewCustomer,
        findAllCustomer,
        findCustomerById,
        updateOldCustomer,
        removeCustomer } = customerService();


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

            const { page, size, sortBy, sortType, keyword } = req.query;

            const { count, rows, page: fixedPage, size: fixedSize, sortBy: fixedSortBy, sortType: fixedSortType } = await findAllCustomer(page, size, sortBy, sortType, keyword);

            res.send(Response().pagination(res.statusCode, 'SUCCESS', rows, +fixedPage, count, +fixedSize, fixedSortBy, fixedSortType, keyword));
        } catch (error) {
            res.status(500).send(Response().errorMessage(res.statusCode, error.message));
        }
    };

    const getById = async (req, res) => {

        try {

            const customer = await findCustomerById(req.params.id);
            res.send(Response().successMessage(res.statusCode, 'SUCCESS', customer));
        } catch (error) {
            res.status(500).send(Response().errorMessage(res.statusCode, error.message));
        }
    };

    const update = async (req, res) => {

        try {
            const updatedCustomer = await updateOldCustomer(req.body);
            res.send(Response().successMessage(res.statusCode, 'SUCCESS', updatedCustomer));
        } catch (error) {
            res.status(500).send(Response().errorMessage(res.statusCode, error.message));
        }
    };


    const remove = async (req, res) => {

        try {

            const customer = await removeCustomer(req.params.id);
            res.send(Response().successMessage(res.statusCode, 'SUCCESS', customer));
        } catch (error) {
            res.status(500).send(Response().errorMessage(res.statusCode, error.message));
        }
    };


    return {
        create,
        list,
        getById,
        update,
        remove
    };

};

export default CustomerController;