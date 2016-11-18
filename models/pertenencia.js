module.exports = function sequelizePertenencia(sequelize, DataTypes) {
  return sequelize.define('pertenencia', 
			  { nombre: DataTypes.STRING(30),
                            id_gente: DataTypes.INTEGER(4)
			  },{
                            timestamps:false, tableName: 'pertenece' });
};
