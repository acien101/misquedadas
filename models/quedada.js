module.exports = function sequelizeQuedada(sequelize, DataTypes) {
  return sequelize.define('quedada', 
			  { id: {type: DataTypes.INTEGER(4), primaryKey : true},  
                            nombre: DataTypes.STRING(30),
				    nombre_grupo: DataTypes.STRING(30),
                            id_sitio: DataTypes.INTEGER(4),
                            fechahora: DataTypes.DATE,
                            foto: DataTypes.STRING(30)
			  },{
                            timestamps:false, tableName: 'quedada' });
};
