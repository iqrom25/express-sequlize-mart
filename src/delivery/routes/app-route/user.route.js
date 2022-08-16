import express from 'express';
const router = express.Router();

const UserRoute = (userController) => {

    const { create, list } = userController;

    router.get('/', list);
    router.post('/', create);

    return router;
};

export default UserRoute;