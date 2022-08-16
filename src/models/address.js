import { DataTypes } from "sequelize";

const Address = (sequelize) => {

    return sequelize.define('address', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },

        streetName:DataTypes.STRING,
        city:DataTypes.STRING(30),
        postalCode:DataTypes.STRING(10)
    },
        {
            freezeTableName: true,
            underscored: true,
            paranoid: true
        });
};


export default Address;