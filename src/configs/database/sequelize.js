import { Sequelize, DataTypes} from "sequelize";



//database connection
const { DB_DRIVER :dbDriver, DB_HOST:dbHost, DB_NAME:dbName, DB_PORT:dbPort, DB_USERNAME:dbUser, DB_PASSWORD:dbPassword } = process.env;
const connectionString = `${dbDriver}://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;

const sequelize = new Sequelize(connectionString);

export {sequelize, DataTypes};