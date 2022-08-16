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
            
            const { page, size } = req.query;
            const { count, rows, fixedPage ,fixedSize } = await findAllCustomer(page, size);
            res.send(Response().pagination(res.statusCode, 'SUCCESS', rows, +fixedPage, count, +fixedSize));
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