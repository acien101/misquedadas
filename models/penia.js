module.exports = function sequelizePenia(sequelize, DataTypes) {
  return sequelize.define('peña', 
			  { nombre: DataTypes.STRING(30),
			    fecha_creación:  DataTypes.DATE,
                            escudo: DataTypes.INTEGER(30)
			  },{
                            timestamps:false, tableName: 'peña' });
};
