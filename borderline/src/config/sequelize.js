import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const target = path.join(__dirname, '../models');

const sequelize = new Sequelize('borderline', 'root', 'root', {
  dialect: 'mysql',
  host: "localhost",
  port: 3306,
   define: {
        timestamps: false
    }
});
const db = {};
let model;

fs.readdirSync(target)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file.indexOf('.map') === -1);
  })
  .forEach((file) => {
    model = sequelize.import(path.join(target, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((name) => {
  if ('associate' in db[name]) {
    db[name].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
