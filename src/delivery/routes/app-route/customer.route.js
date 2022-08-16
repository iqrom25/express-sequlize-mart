import express from 'express';
const router = express.Router();

const CustomerRoute = (customerController) => {

    const { create,
        list,
        getById,
        update,
        remove } = customerController;

    router.get('/', list);
    router.get('/:id', getById);
    router.post('/', create);
    router.put('/', update);
    router.delete('/:id', remove);

    return router;
};

export default CustomerRoute;