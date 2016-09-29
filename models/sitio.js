module.exports = function sequelizeSitio(sequelize, DataTypes) {
  return sequelize.define('sitio', 
			  { id: {type: DataTypes.INTEGER, primaryKey : true},
                            nombre: DataTypes.STRING(30),
                            foto: DataTypes.STRING(30),
                            geolocalizacion: DataTypes.STRING(30)
			  },{
                            timestamps:false, tableName: 'sitio' });
};
