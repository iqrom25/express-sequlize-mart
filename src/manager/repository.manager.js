import CustomerRepository from "../repositories/customer.repository.js";

const RepositoryManager = (infraManager) => {
    const { initDb } = infraManager;
    const db = initDb()

    //all repo goes here
    const customerRepository = () => {
        return  CustomerRepository(db);
    };

    return {
        customerRepository
    };
};

export default RepositoryManager;