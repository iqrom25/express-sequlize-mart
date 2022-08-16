import { DataTypes } from "sequelize";

const User = (sequelize) => {
    
    return sequelize.define('user', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },

        username: {
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        isStatus: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },

    },
        {
            freezeTableName: true,
            underscored: true,
            paranoid: true
        });


};


export default User;