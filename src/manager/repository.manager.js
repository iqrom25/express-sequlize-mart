import CustomerRepository from "../repositories/customer.repository.js";
import UserRepository from "../repositories/user.repository.js";

const RepositoryManager = (infraManager) => {
    const { initDb } = infraManager;
    const db = initDb()

    //all repo goes here
    const customerRepository = () => {
        return  CustomerRepository(db);
    };

    const userRepository = () => {
        return  UserRepository(db);
    };

    return {
        customerRepository,
        userRepository
    };
};

export default RepositoryManager;