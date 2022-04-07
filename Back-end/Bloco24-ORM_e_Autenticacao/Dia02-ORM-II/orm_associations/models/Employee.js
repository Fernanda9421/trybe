module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'Employees',
    underscored: true,
  });

  // 1:1
  // Employee.associate = (models) => {
  //   Employee.hasOne(models.Address,
  //     { foreignKey: 'employeeId', as: 'addresses' });
  // };

  // 1:N
  Employee.associate = (models) => {
    Employee.hasMany(models.Address,
      { foreignKey: 'employeeId', as: 'addresses' });
  };

  return Employee;
};
