import express from 'express';
const router = express.Router();

//colect all app route
const AppRoute = (customerRoute) => {

    router.use('/customers', customerRoute);

    return router;
};

export default AppRoute;