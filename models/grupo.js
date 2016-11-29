module.exports = function sequelizeGrupo(sequelize, DataTypes) {
  return sequelize.define('grupo', 
			  { nombre: DataTypes.STRING(30),
			    fecha_creacion:  DataTypes.DATE,
                            escudo: DataTypes.INTEGER(30)
			  },{
                            timestamps:false, tableName: 'grupo' });
};
