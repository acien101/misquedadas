module.exports = function sequelizeGente(sequelize, DataTypes) {
  return sequelize.define('gente', 
			  { id: {type: DataTypes.INTEGER(4), primaryKey : true},
                            alias: DataTypes.STRING(30),
                            nombre: DataTypes.STRING(30),
                            foto: DataTypes.STRING(30),
			  },{
                            timestamps:false, tableName: 'gente' });
};
