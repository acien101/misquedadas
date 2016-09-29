module.exports = function sequelizeAsistencia(sequelize, DataTypes) {
  return sequelize.define('asistencia', 
			  { id_quedada: DataTypes.INTEGER(4),
                            id_gente: DataTypes.INTEGER(4)
			  },{
                            timestamps:false, tableName: 'asistencia' });
};
