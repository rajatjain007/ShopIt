const { DataTypes } = require("sequelize");

module.exports = (sequilize) => {
  const Order = sequilize.define("Order", {
    userId: DataTypes.STRING(24),
    email: DataTypes.STRING,
    status: DataTypes.STRING,
  });

  const OrderItem = sequilize.define("OrderItem", {
    sku: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
  });

  Order.hasMany(OrderItem);
  OrderItem.belongsTo(Order, {
    onDelete: "CASCADE",
    foreignKey: {
      allowNull: false,
    },
  });
  sequilize.sync();
};
