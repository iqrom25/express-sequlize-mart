import { DataTypes } from "sequelize";

const Product = (sequelize) => {

    return sequelize.define('product', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },

        price:DataTypes.INTEGER,

    },
        {
            freezeTableName: true,
            underscored: true,
            paranoid: true
        });
};


export default Product;