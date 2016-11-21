-- MySQL dump 10.13  Distrib 5.7.16, for Linux (x86_64)
--
-- Host: localhost    Database: misquedadas
-- ------------------------------------------------------
-- Server version	5.7.16-0ubuntu0.16.04.1

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

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `misquedadas` /*!40100 DEFAULT CHARACTER SET latin1 */;

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asiste`
--

LOCK TABLES `asiste` WRITE;
/*!40000 ALTER TABLE `asiste` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gente`
--

LOCK TABLES `gente` WRITE;
/*!40000 ALTER TABLE `gente` DISABLE KEYS */;
INSERT INTO `gente` VALUES (1,'g1','g1','G1.png'),(2,'g 2','g 2','G2.png'),(3,'g3','g3','G3.png'),(4,'g 4','g 4','G4.png'),(5,'g5','g5','G5.png'),(6,'g 6','g 6','G6.png'),(7,'g7','g7','G7.png'),(8,'g 8','g 8','G8.png'),(9,'G9','g9','G9.png'),(10,'g 10','g 10','G10.png');
/*!40000 ALTER TABLE `gente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `peña`
--

DROP TABLE IF EXISTS `peña`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `peña` (
  `nombre` varchar(30) NOT NULL,
  `fecha_creación` date DEFAULT NULL,
  `escudo` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peña`
--

LOCK TABLES `peña` WRITE;
/*!40000 ALTER TABLE `peña` DISABLE KEYS */;
INSERT INTO `peña` VALUES ('p1','2011-01-01','P1.png');
/*!40000 ALTER TABLE `peña` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pertenece`
--

LOCK TABLES `pertenece` WRITE;
/*!40000 ALTER TABLE `pertenece` DISABLE KEYS */;
INSERT INTO `pertenece` VALUES ('p1','1');
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
  `nombre_peña` varchar(30) DEFAULT NULL,
  `id_sitio` int(4) DEFAULT NULL,
  `fechahora` datetime DEFAULT NULL,
  `foto` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quedada`
--

LOCK TABLES `quedada` WRITE;
/*!40000 ALTER TABLE `quedada` DISABLE KEYS */;
INSERT INTO `quedada` VALUES (1,'q1','p1',1,'2001-01-01 01:01:01','Q1.png'), (2,'q 2','p1',2,'2002-02-02 02:02:02','Q2.png'), (3,'q3','p1',3,'2003-03-03 03:03:03','Q3.png'), (4,'q 4','p1',4,'2004-04-04 04:04:04','Q4.png'), (5,'q5','p1',5,'2005-05-05 05:05:05','Q5.png'), (6,'q 6','p1',6,'2006-06-06 06:06:06','Q6.png'), (7,'q 7','p1',7,'2007-07-07 07:07:07','Q7.png'), (8,'q 8','p1',8,'2008-08-08 08:08:08','Q8.png'), (9,'q 9','p1',9,'2009-09-09 09:09:09','Q9.png'), (10,'q 10','p1',10,'2010-10-10 10:10','Q10.png');
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sitio`
--

LOCK TABLES `sitio` WRITE;
/*!40000 ALTER TABLE `sitio` DISABLE KEYS */;
INSERT INTO `sitio` VALUES (1,'s1','S1.png','01.0000001,-01.0000001'),(2,'s 2','S2.png','02.0000002,-02.0000002'),(3,'s3','S3.png','03.0000003,-03.0000003'),(4,'s 4','S4.png','04.0000004,-04.0000004'),(5,'s5','S5.png','05.0000005,-05.0000005'),(6,'s 6','S6.png','06.0000006,-06.0000006'),(7,'s 7','S7.png','07.0000007,-07.0000007'),(8,'s 8','S8.png','08.0000008,-08.0000008'),(9,'s9','S9.png','09.0000009,-09.0000009'),(10,'s 10','S10.png','10.0000010,-10.0000010');
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

-- Dump completed on 2016-11-18 20:46:44
