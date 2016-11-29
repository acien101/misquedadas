-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: misquedadas
-- ------------------------------------------------------
-- Server version	5.7.9-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `misquedadas`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `misquedadas` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `misquedadas`;

--
-- Table structure for table `asiste`
--

DROP TABLE IF EXISTS `asiste`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `asiste` (
  `id_quedada` int(4) NOT NULL,
  `id_gente` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asiste`
--

LOCK TABLES `asiste` WRITE;
/*!40000 ALTER TABLE `asiste` DISABLE KEYS */;
INSERT INTO `asiste` VALUES (1,3),(1,4),(2,1),(2,2),(2,3),(2,5),(3,5),(3,7),(3,8),(4,3),(4,4),(4,7);
/*!40000 ALTER TABLE `asiste` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gente`
--

DROP TABLE IF EXISTS `gente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gente` (
  `id` int(4) NOT NULL,
  `alias` varchar(30) DEFAULT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `foto` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gente`
--

LOCK TABLES `gente` WRITE;
/*!40000 ALTER TABLE `gente` DISABLE KEYS */;
INSERT INTO `gente` VALUES (1,'ana','Ana Montero','foto-ana.jpg'),(2,'blas','Blas Montes','foto-blas.jpg'),(3,'carmen','Carmen Montalbo','foto-carmen.jpg'),(4,'dani','Daniel Montserrat','foto-dani.jpg'),(5,'epi','Epifanio Montuenga','foto-epi.jpg'),(6,'fede','Federico Moreno','foto-fede.jpg'),(7,'gema','Gema Moreta','foto-gema.jpg'),(8,'helga','Helga Molina','foto-helga.jpg');
/*!40000 ALTER TABLE `gente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grupo`
--

DROP TABLE IF EXISTS `grupo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grupo` (
  `nombre` varchar(30) NOT NULL,
  `fecha_creacion` date DEFAULT NULL,
  `escudo` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grupo`
--

LOCK TABLES `grupo` WRITE;
/*!40000 ALTER TABLE `grupo` DISABLE KEYS */;
INSERT INTO `grupo` VALUES ('basket98','2016-11-21','escudo-basket98.jpg'),('cine','2016-11-23','escudo-cine.jpg'),('rutas','2016-11-24','escudo-rutas.jpg');
/*!40000 ALTER TABLE `grupo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pertenece`
--

DROP TABLE IF EXISTS `pertenece`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pertenece` (
  `nombre` varchar(30) NOT NULL,
  `id_gente` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pertenece`
--

LOCK TABLES `pertenece` WRITE;
/*!40000 ALTER TABLE `pertenece` DISABLE KEYS */;
INSERT INTO `pertenece` VALUES ('basket98',1),('basket98',2),('basket98',6),('cine',5),('cine',8),('rutas',3),('rutas',4),('rutas',7);
/*!40000 ALTER TABLE `pertenece` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quedada`
--

DROP TABLE IF EXISTS `quedada`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quedada` (
  `id` int(4) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `nombre_grupo` varchar(30) DEFAULT NULL,
  `id_sitio` int(4) DEFAULT NULL,
  `fechahora` datetime DEFAULT NULL,
  `foto` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quedada`
--

LOCK TABLES `quedada` WRITE;
/*!40000 ALTER TABLE `quedada` DISABLE KEYS */;
INSERT INTO `quedada` VALUES (1,'desayuno','rutas',3,'2016-11-21 11:00:00','foto-q1.jpg'),(2,'comida','basket98',1,'2016-11-22 15:00:00','foto-q2.jpg'),(3,'merienda','cine',3,'2016-11-23 19:00:00','foto-q3.jpg'),(4,'cena','rutas',2,'2016-11-24 21:00:00','foto-q4.jpg');
/*!40000 ALTER TABLE `quedada` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sitio`
--

DROP TABLE IF EXISTS `sitio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sitio` (
  `id` int(4) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `foto` varchar(30) DEFAULT NULL,
  `geolocalizacion` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sitio`
--

LOCK TABLES `sitio` WRITE;
/*!40000 ALTER TABLE `sitio` DISABLE KEYS */;
INSERT INTO `sitio` VALUES (1,'sol','foto-sol.jpg','40.416850, -3.702881'),(2,'moncloa','foto-moncloa.jpg','40.435407, -3.719202'),(3,'bilbao','foto-bilbao.jpg','40.429048, -3.702192');
/*!40000 ALTER TABLE `sitio` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-11-28 15:52:41
