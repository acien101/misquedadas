TEST DESIGN

Este directorio contiene multiples ficheros de backup de la BBDD que se han de restaurar con:
	mysql ‐uroot ‐pftel < mpttdb‐backup.sql misquedadas-testXXX-backup.sql
también contiene ficheros de contenidos multimedia, asociados a cada una de las pruebas, que se han de descargar como:
	cd ~/misquedadas; tar xvzf misquedadas-testXXX-media.taz
para pasar pruebas del paquete misquedadas.
Una vez restaurada la BBDD correspondiente, basta con ejecutar:  npm test y navegar por el portal para comprobar el "paso" del test.
Los tests son ejecutable individualmente y se considera que los tests de la BBDD han concluido cuando todos los casos han pasado.

WARNING: No hacer git-commit ni git-push con contenidos en la BBDD y el el directorio de media que no sean los del ejemplo.

TESTS PROCEDURE
	-- recuperar el respaldo de la BBDD correspondiente al caso de test
	-- borrar el directorio media y recuperar el taz del directorio correspondiente al caso de test.
	-- Matar cualquier proceso "node" que se estuviera ejecutando
	-- ejecutar: npm start; sleep 5; npm test
	-- comprobar que los tests anteriores han pasado sin errores.
	-- nevegar por el portal para comprobar el contenido que indique el caso de test.

TESTS CASES
-- test001 - tests de gentes: Base de datos con una quedada y 10 gente. Las personas han de tener algún nombre o alias con " ".
-- test002 - tests de sitios: Base de datos con 10 quedadas y 10 sitios. Las quedadas y los sitios han de tener el nombre y el sitio con " ".
-- test003 - tests de peñas:  Base de datos con 10 peñas, 10 gente y 10 sitios, cada peña tiene una gente. Las peñas y las gentes han de tener el nombre y el sitio con " ".
-- test004 - tests de peñas:  Base de datos con 10 peñas, 10 gente y 10 sitios, cada peña tiene una gente. Todos las tablas han de tener el nombre y el sitio con " ", "ñ" y acentos.
-- test005 - tests de peñas:  Base de datos con 10 peñas, 10 gente, 10 sitios y 10 asistencias, cada peña tiene una gente cada gente asiste a una quedada. Todos las tablas han de tener el nombre y el sitio con " ", "ñ" y acentos.
