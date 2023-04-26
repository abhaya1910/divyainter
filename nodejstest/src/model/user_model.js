

module.exports = (sequelize, DataTypes) => { 
    const allUsers = sequelize.define("userDetails", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING(28),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(28),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(28),
            allowNull: true
        },
        contact_no: {
            type: DataTypes.STRING(28),
            allowNull: true
        }
    })

    return allUsers;
}