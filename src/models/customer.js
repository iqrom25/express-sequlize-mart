import { DataTypes } from "sequelize";

const Customer = (sequelize) => {

    return sequelize.define('customer', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        address: DataTypes.STRING(200),

        phone: DataTypes.STRING(13),

        email: {
            type: DataTypes.STRING(50),
            unique: true
        },

        balance: DataTypes.INTEGER,

        isStatus: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    },
        {
            freezeTableName: true,
            underscored: true,
            paranoid: true
        });
};


export default Customer;