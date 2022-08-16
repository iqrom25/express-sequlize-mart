import CustomerService from "../services/customer.service.js";

const ServiceManager = (repositoryManager) => {

    const { customerRepository } = repositoryManager;

    const customerService = () => {

        return CustomerService(customerRepository);
    };

    return {
        customerService
    };
};

export default ServiceManager;