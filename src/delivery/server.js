import 'dotenv/config';
import express from 'express';
import config from '../configs/config.js';
import InfraManager from '../manager/infra.manager.js';
import RepositoryManager from '../manager/repository.manager.js';
import ServiceManager from '../manager/service.manager.js';
import CustomerController from './controllers/customer.controller.js';
import CustomerRoute from './routes/app-route/customer.route.js'
import AppRoute from './routes/app.route.js';

const { port, host } = config();
const infraManager =  InfraManager(config);
const repositoryManager = RepositoryManager(infraManager);
const serviceManager =  ServiceManager(repositoryManager);
const customerController = CustomerController(serviceManager.customerService);
const customerRoute = CustomerRoute(customerController);


const Server = () => {

    const app = express();

    app.use(express.json());

    app.use(AppRoute(customerRoute));

    app.listen(port, host, () => {
        console.log(`running at ${host}:${port}`);
    })

};

export default Server;


