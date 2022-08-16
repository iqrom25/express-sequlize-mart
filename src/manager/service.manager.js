import CustomerService from "../services/customer.service.js";
import UserService from "../services/user.service.js";

const ServiceManager = (repositoryManager) => {

    const { customerRepository, userRepository } = repositoryManager;

    const customerService = () => {

        return CustomerService(customerRepository);
    };

    const userService = () => {

        return UserService(userRepository);
    };

    return {
        customerService,
        userService
    };
};

export default ServiceManager;