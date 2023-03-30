import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";

class Tutor extends Model {}

Tutor.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "id"
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "tutor", // We need to choose the model name
    timestamps: false
  }
);

export { Tutor };
