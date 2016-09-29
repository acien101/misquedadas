module.exports = function sequelizePenia(sequelize, DataTypes) {
  return sequelize.define('peña', 
			  { nombre: DataTypes.STRING(30),
                            id_gente: DataTypes.INTEGER(4)
			  },{
                            timestamps:false, tableName: 'peña' });
};
