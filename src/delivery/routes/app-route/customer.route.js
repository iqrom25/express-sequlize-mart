import express from 'express';
const router = express.Router();

const CustomerRoute = (customerController) => {

    const { create, list } = customerController;

    router.get('/', list);
    router.post('/', create);

    return router;
};

export default CustomerRoute;