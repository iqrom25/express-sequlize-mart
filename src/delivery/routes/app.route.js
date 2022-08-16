import express from 'express';
const router = express.Router();

//colect all app route
const AppRoute = (customerRoute, userRoute) => {

    router.use('/customers', customerRoute);
    router.use('/users',userRoute);

    return router;
};

export default AppRoute;