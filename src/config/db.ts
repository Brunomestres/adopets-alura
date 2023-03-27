import { Sequelize } from 'sequelize'


export const sequelize = new Sequelize('adopets', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
})
const run = async () => {
 await sequelize.authenticate();
}

try {
    run()
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }