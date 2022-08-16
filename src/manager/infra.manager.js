import { Sequelize } from "sequelize";

const InfraManager = (config) => {
    const initDb = () => {
        //database connection
        const {dbHost,dbPort,dbUser,dbPassword, dbName, dbDriver} = config();
        const connectionString = `${dbDriver}://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;

        const sequelize = new Sequelize(connectionString);

        return sequelize;
    };

    return { initDb };
};

export default InfraManager;