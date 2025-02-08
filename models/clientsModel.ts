import db from "../db";
import { DataTypes, Model } from "sequelize";

class Client extends Model {}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "clients",
    timestamps: true, // ⬅️ Agora o Sequelize sabe que createdAt e updatedAt existem
  }
);

export default Client;
