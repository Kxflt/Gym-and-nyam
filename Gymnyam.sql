-- MySQL dump 10.13  Distrib 8.0.33, for macos13 (arm64)
--
-- Host: localhost    Database: gymñam
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `exercises`
--

DROP TABLE IF EXISTS `exercises`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exercises` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `description` varchar(500) NOT NULL,
  `photo` varchar(100) DEFAULT NULL,
  `userId` int unsigned NOT NULL,
  `typologyId` int unsigned NOT NULL,
  `muscleGroupId` int unsigned NOT NULL,
  `modifiedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `userId` (`userId`),
  KEY `typologyId` (`typologyId`),
  KEY `muscleGroupId` (`muscleGroupId`),
  CONSTRAINT `exercises_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `exercises_ibfk_2` FOREIGN KEY (`typologyId`) REFERENCES `typologys` (`id`),
  CONSTRAINT `exercises_ibfk_3` FOREIGN KEY (`muscleGroupId`) REFERENCES `muscleGroups` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercises`
--

LOCK TABLES `exercises` WRITE;
/*!40000 ALTER TABLE `exercises` DISABLE KEYS */;
INSERT INTO `exercises` VALUES (5,'CONCENTRATION CURL:','The concentration curl is a highly effective exercise for muscle development in both arms, targeting all of the most important muscles in the brachial region and achieving an increase in upper limb muscle volume. ','c4cfc9a7-e191-4dd8-b2d3-cd4e72250d27.jpg',1,1,1,NULL,'2023-08-04 08:57:39'),(6,'DUMBBELL HAMMER CURL:','The dumbbell hammer curl is one of the most well-known exercises in the world of fitness. It is an ideal technique for developing the central part of the biceps, as well as the forearm. ','cd3a1f07-ae7a-4b85-ad32-551e56d6fec1.jpg',1,1,1,NULL,'2023-08-04 08:58:12'),(7,'NEUTRAL GRIP PULL-UPS:','In neutral grip pull-ups, the palms of the hands are placed parallel and facing each other. Unlike the other two kinds of grip, in this variation the grip is lateral, permitting a more natural rotation of the wrists and shoulders.','8cf2e784-cf7e-41b4-a19f-8a7c82587712.jpg',1,1,1,NULL,'2023-08-04 08:58:55'),(8,'SINGLE-ARM INCLINE BENCH PREACHER CURL W/ DUMBBELL:','The dumbbell is held with the hand in a supinated grip, elbow flexed and biceps contracted, and the arms are extended back to the starting point. Care must be taken to keep the biceps actively contracted. ','94119483-2c8d-41b1-a645-ae6c57a31cf9.jpg',1,1,1,NULL,'2023-08-04 08:59:42'),(9,'SPIDER CURL:','Lying face down on an incline bench, with the chest well supported, perform a curl with the dumbbell. ','1f4f9c88-4f4f-4ce4-9b9c-e6a3310e7315.jpg',1,1,1,NULL,'2023-08-04 09:00:18'),(10,'LYING CABLE CURL:','Perform a curl, but this time using the low cable machine.','73d65bd6-9388-420e-9272-5567516d5bb3.jpg',1,1,1,NULL,'2023-08-04 09:01:05'),(11,'ZOTTMAN CURL:','Lift the dumbbells towards the chest whilst rotating the wrists, and then lower them by rotating them in the opposite direction.','2fab0a13-29cb-4fa8-81a9-885a73e96ba1.jpg',1,1,1,NULL,'2023-08-04 09:01:32'),(12,'LOW CABLE BICEPS CURL:','Keeping the elbows close to the body, with hands on the ropes, we slowly raise the arms from below, allowing a full range of movement. ','b2dc8473-1d7f-4c40-a7bd-5f6df311ec26.jpg',1,1,1,NULL,'2023-08-04 09:02:17'),(13,'STANDING DUMBBELL EXTENSIONS:','The muscle will literally burn! Take care not to lift too much weight, and pay attention to your technique in order to avoid injuries. Keep your back straight as well, in order to avoid injuring your lower back. A strong core is essential.','8111d11e-4a7c-4ef5-93d0-7bf3e75bc3bd.jpg',1,1,2,NULL,'2023-08-04 09:03:53'),(14,'OVERHEAD EXTENSIONS W/ DUMBBELL ON BENCH:','To target the long head of the triceps, hold the dumbbell above your head and lower it by flexing your elbows without locking them. It’s crucial to keep the back straight and a firm core throughout all repetitions in this exercise. ','60f25bb7-cba5-48ca-bdc9-0a37784120fd.jpg',1,1,2,NULL,'2023-08-04 09:04:39'),(15,'FRENCH PRESS W/ DUMBBELL:','Designed to allow many repetitions if so desired, even with a heavy weight. Ideal for muscle definition if using a lighter, more manageable weight. If available, use an EZ bar and pay maximum attention to the eccentric phase. ','4a0ec7ef-bfaf-471c-9b4a-d0bd6e3a6617.jpg',1,1,2,NULL,'2023-08-04 09:05:13'),(16,'PARALLEL BARS:','A classic exercise that also targets the chest. It is not advisable to do this exercise if you have a shoulder injury; try not to lock your elbows either. The closer the bars are to one another, the better, since the triceps will receive move stimulation. ','d1460691-c77c-4dde-a451-cb42be89c498.jpg',1,1,2,NULL,'2023-08-04 09:06:00'),(17,'CLOSE-GRIP BENCH PRESS:','Similar to a traditional bench press, but with the hands closer together and a narrow grip to focus on targeting the triceps. ','f050b50a-ba13-405b-a5c3-bf49470d9a7c.jpg',1,1,2,NULL,'2023-08-04 09:06:35'),(18,'TRICEPS ROPE PUSHDOWN:','Another typical technique. It’s best not to use excessive weight, to avoid unduly targeting the back and shoulders. Try to keep your shoulders closer to your body and synchronise your breathing with each movement.','06d73e9a-ac89-4583-b9fa-a2e4e5ffcccd.jpg',1,1,2,NULL,'2023-08-04 09:07:51'),(20,'TRICEPS BAR PUSHDOWN:','Make sure your elbows are kept comfortably close to your sides. Gently push the bar down until your arms are fully extended.','78a30847-0995-4d78-a995-f28ccf34c1ba.jpg',1,1,2,NULL,'2023-08-04 09:12:53'),(21,'SINGLE-ARM TRICEPS EXTENSION WITH CABLE:','Extend your elbows while keeping them close to the sides of the body, bringing the cable handle down. This will exclusively make use of the forearm. ','7aecef37-d86d-4e15-a014-eff49bfd00e5.jpg',1,1,2,NULL,'2023-08-04 09:13:39'),(22,'FRENCH PRESS BENCH EXTENSIONS:','Lie face up on the bench, feet flat on the floor, core engaged and chest pointing towards the ceiling. Grab the bar with palms facing up and arms extended, placing your hands on the bar about shoulder-width apart','a0774edd-14d6-4e3a-af41-a430521ee1d3.jpg',1,1,2,NULL,'2023-08-04 09:14:16'),(23,'DUMBBELL SHOULDER PRESS:','Lift the dumbbells with a strong, almost explosive, upward movement, then lower them slowly. Keep your torso stable and guide the movement smoothly. ','f85c458d-f0c6-46c1-948b-10e99920a28c.jpg',1,1,4,NULL,'2023-08-04 09:17:51'),(24,'SHOULDER LATERAL RAISES:','Try to slightly flex the elbows, avoiding fully extending the arms. Do not lift too much weight or lift your arms above your head.','9d7e9015-5307-4c70-9ff2-e8acb4d5bcf2.jpg',1,1,4,NULL,'2023-08-04 09:20:21'),(25,'ALTERNATING HAMMER FRONT RAISES:','Pay special attention to the downward movement. Lift the dumbbells up to head height. ','b69dcdb7-0f23-420e-85ae-8da75a9ae425.jpg',1,1,4,NULL,'2023-08-04 09:20:57'),(26,'MILITARY PRESS:','A must in any shoulder workout. Use an Olympic barbell while standing or sitting on a multipower machine, lift and lower the barbell in front of your head. ','948ee9a6-64f6-4752-8b1d-594c023fd4b5.jpg',1,1,4,NULL,'2023-08-04 09:21:23'),(27,'UPRIGHT ROW:','A perfect compound movement for the lateral part of the deltoids. The exercises will help you increase muscle mass and tone. ','44bb1266-4ffa-4359-babf-08c1cc6189ff.jpg',1,1,4,NULL,'2023-08-04 09:21:54'),(28,'SHOULDER SHRUGS:','Start with your feet slightly apart, holding dumbbells in both hands with your arms at your sides. Subsequently, shrug your shoulders upwards, or make imaginary circles either forwards or backwards.','072facde-bcaa-4e18-b956-058f451b7224.jpg',1,1,4,NULL,'2023-08-04 09:22:33'),(29,'MACHINE LATERAL RAISES: ','A simple technique. Sit on the machine and raise the arms laterally in order to target the deltoids. Explosive lift and a very controlled descent.','cecb57ed-e376-4bb5-a077-5f05c5199283.jpg',1,1,4,NULL,'2023-08-04 09:23:12'),(30,' INCLINE BENCH PRESS:','Lie on a bench with a 45-degree incline, holding a pair of dumbbells in your hands. Extend your arms outwards from your chest, holding both weights with palms facing your feet. ','851847be-cc4e-45c3-b3c9-6ead3c1732d5.jpg',1,1,6,NULL,'2023-08-04 09:26:29'),(31,'DECLINE BENCH PRESS: ','Stretch out on a slightly downward-inclined bench, securing your legs by placing your shins on the corresponding supports. Hold a pair of dumbbells with palms facing down, always a shoulder width apart','9834aced-2173-4508-a4bd-ecd2c0937b91.jpg',1,1,6,NULL,'2023-08-04 09:27:15'),(32,'CABLE CROSSOVERS:','A classic chest training exercise often done as a finisher, aiming to concentrate on your chest and achieve a great pump.','10ddeaff-e939-41bb-af68-7d5666378dbb.jpg',1,1,6,NULL,'2023-08-04 09:27:52'),(33,'DUMBBELL FLYES:','Perform this exercise very slowly, bringing the dumbbells together at the top of the movement. Avoid lowering your arms too much to prevent injuries, and carefully select a weight you can actually handle. ','e7c6f1ee-6044-479a-a4e4-498215ec2982.jpg',1,1,6,NULL,'2023-08-04 09:28:33'),(34,'BENCH PRESS:','Hold the bar at shoulder height with wrists straight. Your hands must grip the bar firmly.','d160aec3-3ac4-4a01-bb9b-49597cbd249b.jpg',1,1,6,NULL,'2023-08-04 09:29:22'),(36,'CABLE FLYES:','Similar to dumbbell flyes, but using a cable machine to create resistance. ','b3d027a8-fb95-42e1-98f0-768c5c5b725f.jpg',1,1,6,NULL,'2023-08-04 09:31:32'),(37,'SINGLE-ARM DUMBBELL ROW: ','With one knee on a bench, perform a heavy dumbbell row to target the latissimus dorsi (lats). It is crucial to maintain a straight back and complete the movement with the widest range possible. ','cbd37936-596d-4c17-a383-47fdd3dd32bc.jpg',1,1,5,NULL,'2023-08-04 09:32:40'),(38,'PULL-UPS:','Pull-ups are yet another fundamental exercise to gain strength, with all the variations and different grips available. Activate your lats, don’t shorten the range of motion, and pay attention to scapular retraction. ','e6873dde-14bf-42e7-a033-3a861303200d.jpg',1,1,5,NULL,'2023-08-04 09:33:13'),(39,'CABLE ROW TO CHEST:','Sit on a machine, performing a cable row where you bring the handle to your chest. Take care not to put excessive strain on your shoulders. The lats should do all the work of loading and unloading.','e2091d7a-78ec-429d-89f2-87c5946e9955.jpg',1,1,5,NULL,'2023-08-04 09:33:47'),(40,'DEADLIFT','A powerlifting movement that should never be missing from your weekly routine. Before attempting this exercise, make sure to check the weightlifting belts the gym recommends.','b800bca6-fd69-44a2-9177-2a39fa688e71.jpg',1,1,5,NULL,'2023-08-04 09:34:47'),(41,'KETTLEBELL SWINGS: ','A very useful exercise in which you generate force with the lower body, and the arms only act to guide the movement of the weight. ','d166c687-58cc-4b67-97e0-455da0e8e050.jpg',1,1,5,NULL,'2023-08-04 09:35:26'),(42,'LOW CABLE ROW:','Start in a seated position, with legs extended forward and the torso perpendicular to the ground, maintaining the natural curvature of the spine. ','487803f1-c559-455b-9745-844f1b4ad81b.jpg',1,1,5,NULL,'2023-08-04 09:35:59'),(43,'BARBELL SQUATS: ','Keep your back straight, core tight, avoiding letting the knees cave in. Descend as slowly as possible, with an explosive ascent. There are many types of squat, and this is one of the most effective and common ones. ','09447f31-20a2-4ad2-b727-c8c992115aaa.jpg',1,1,8,NULL,'2023-08-04 09:36:42'),(44,'BULGARIAN SPLIT SQUATS:','The knee need not touch the ground, but you should feel the tension in your glutes. ','97ca285e-78fd-413f-b08b-44e7a234006f.jpg',1,1,8,NULL,'2023-08-04 09:37:21'),(45,'LEG PRESS:','As well as taking care not to lock the knees, it’s crucial to complete the full range of motion by properly flexing your legs.','2791c6c6-976a-47d4-a84a-e372c12a9fba.jpg',1,1,8,NULL,'2023-08-04 09:38:01'),(46,'GOOD MORNINGS:','Take care not to overstrain your lower back, keep your back straight at all times, and engage your core to execute this technique properly. ','149a4a72-fa4a-45b3-8b76-df8239362733.jpg',1,1,8,NULL,'2023-08-04 09:38:37'),(47,'LEG EXTENSION:','This exercise is performed on a machine with an adjustable backrest, and a roller bar placed on the instep (top of the foot). The exercise involves lifting the legs, feeling the force of the weight on the upper part of the thigh.','2e0fda0e-42f3-4e69-ba1d-4fa81493656f.jpg',1,1,8,NULL,'2023-08-04 09:39:13'),(48,'LEG CURL:','A type of isolation weight training which targets the hamstring muscles of the legs. ','5027b348-a56e-4b4c-a056-bb0b386bfe17.jpg',1,1,8,NULL,'2023-08-04 09:39:49'),(49,'ABDUCTOR: ','Targets the muscles involved in rotating the thigh outward, such as the sartorius, gluteus medius, and tensor fasciae latae. ','6ab1a983-4f2d-4f1b-b4a7-eb148326c90d.jpg',1,1,8,NULL,'2023-08-04 09:40:31'),(50,'STANDING CALF RAISES:','Stand on the balls of your feet and lower back down below the step. You can vary the intensity by doing it on just one leg, or even add resistance with the use of weights. ','7d7fa653-96bf-442f-844b-880fc0809fdf.jpg',1,1,8,NULL,'2023-08-04 09:41:10'),(51,'SEATED CALF RAISES:','Sit on a chair or training bench. Place a bar or dumbbells over your thighs, just above the knees, with your legs at a 90-degree angle. ','073757c2-a913-406c-9454-6274f7a54b21.jpg',1,1,8,NULL,'2023-08-04 09:41:52'),(52,'WRIST FLEXIONS: ','Sit on a bench with a dumbbell, rest your arm on your thigh with your palm facing upwards, and flex your wrist up and down as slowly as you can manage. ','d93a4a45-1b29-48d1-ac9b-cafb761cf45b.jpg',1,1,3,NULL,'2023-08-04 09:42:38'),(53,'BARBELL FOREARM CURL ON BENCH: ','Kneel and place your arms on a bench. Flex your wrists up and down.','1c288118-2ec3-4c26-8547-4374349922e8.jpg',1,1,3,NULL,'2023-08-04 09:43:10'),(54,'FOREARM WITH ROPE:','Hang a weight from a rope, which is in turn attached to a short bar. Roll and unroll it several times.','1b80b180-4327-4ef9-b1b6-1140ad59ee70.jpg',1,1,3,NULL,'2023-08-04 09:43:40'),(55,'PLANK:','Activates every muscle group. Pay special attention to maintaining a straight back, engaging the abdomen, arms and glutes. ','06e41545-1320-4e97-a182-f2b48133d28e.jpg',1,1,7,NULL,'2023-08-04 09:46:01'),(56,'RUSSIAN TWIST:','Sit with your legs bent, feet off the ground. Use a weight or ball and tilt it from side to side. The effort should come from the obliques.\r\n\r\n','dddfe964-46eb-42e5-bbfe-ee148765ae84.jpg',1,1,7,NULL,'2023-08-04 09:46:37'),(57,'SCISSORS: ','Lie on your back, raising one leg completely straight while the other is held in the air. Raise the legs alternately, simulating a scissor motion. ','103c4603-9273-4e52-b0cb-33ce28670c48.jpg',1,1,7,NULL,'2023-08-04 09:47:10'),(58,'SIT-UP:','Lie on your back, with legs bent in a frog-like position. With weight in your arms, sit up and lie back down without lifting your legs off the ground. ','382923a2-f132-4a6a-acb7-71935e7d0f0b.jpg',1,1,7,NULL,'2023-08-04 09:47:42'),(59,'SIDE PLANK WITH ROTATION:','Perform a side plank on one forearm and rotate the body towards the supporting side.','cde37b5d-fe00-4d82-8221-15d40c5b353f.jpg',1,1,7,NULL,'2023-08-04 09:48:19'),(60,'BURPEE: ','Starting in a squatting position, place your hands on the floor, keep your head up and throw your legs back with the feet kept together. Besides targeting the abs, it strengthens the arms and legs. ','dcaefb31-7dd8-4fc8-a481-63f054fd98c4.jpg',1,1,7,NULL,'2023-08-04 09:48:46'),(61,'ELLIPTICAL TRAINER:','This technique consists in placing the feet on two pedals and the hands on two vertical bars. This assists leg movement and makes the exercise easier. ','b9ccbb72-d88a-48a5-bda7-c411a16fdf15.jpg',1,2,8,NULL,'2023-08-04 09:49:30'),(62,'STATIONARY BIKE: ','An aerobic and cardiovascular exercise which is performed on a stationary bike, working the lower body - the legs and glutes. ','3b108b87-3c1c-43ff-8c61-cd6cb6b051c0.jpg',1,2,8,NULL,'2023-08-04 09:50:12'),(63,'ROWING MACHINE:','Bend your knees and lean forward with arms extended in front of you. Now, push with your legs and pull the bar towards your sternum in an explosive, but controlled, manner, until your legs are fully extended and your elbows are by the sides of your body. ','b1ebdfaa-69d5-4311-9477-756cc6d8f880.jpg',1,2,8,NULL,'2023-08-04 09:51:05'),(64,'TREADMILL:','A machine used for physical training that can operate through electrical propulsion or manual effort, allowing you to run or walk while staying in the same spot.','d0695fe7-fc24-4161-829b-3b3948215b1f.jpg',1,2,8,NULL,'2023-08-04 09:51:40'),(65,'STAIR CLIMBER MACHINE:','Replicates the movement of climbing stairs. In this way, it provides a very comprehensive lower body workout, including ankles, knees, hips and glutes. ','b09e2a0b-3b5f-4c7c-a9cd-17250af60506.jpg',1,2,8,NULL,'2023-08-04 09:52:08');
/*!40000 ALTER TABLE `exercises` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favourites`
--

DROP TABLE IF EXISTS `favourites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favourites` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `userId` int unsigned NOT NULL,
  `exerciseId` int unsigned NOT NULL,
  `createdAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `exerciseId` (`exerciseId`),
  CONSTRAINT `favourites_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `favourites_ibfk_2` FOREIGN KEY (`exerciseId`) REFERENCES `exercises` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favourites`
--

LOCK TABLES `favourites` WRITE;
/*!40000 ALTER TABLE `favourites` DISABLE KEYS */;
/*!40000 ALTER TABLE `favourites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `userId` int unsigned NOT NULL,
  `exerciseId` int unsigned NOT NULL,
  `createdAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `exerciseId` (`exerciseId`),
  CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`exerciseId`) REFERENCES `exercises` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `muscleGroups`
--

DROP TABLE IF EXISTS `muscleGroups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `muscleGroups` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `muscleGroups`
--

LOCK TABLES `muscleGroups` WRITE;
/*!40000 ALTER TABLE `muscleGroups` DISABLE KEYS */;
INSERT INTO `muscleGroups` VALUES (1,'Biceps','2023-08-04 08:53:21'),(2,'Triceps','2023-08-04 08:53:21'),(3,'Forearm','2023-08-04 08:53:21'),(4,'Shoulders','2023-08-04 08:53:21'),(5,'Back','2023-08-04 08:53:21'),(6,'Chest','2023-08-04 08:53:21'),(7,'Abdomen','2023-08-04 08:53:21'),(8,'Legs','2023-08-04 08:53:21');
/*!40000 ALTER TABLE `muscleGroups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `typologys`
--

DROP TABLE IF EXISTS `typologys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `typologys` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `typologys`
--

LOCK TABLES `typologys` WRITE;
/*!40000 ALTER TABLE `typologys` DISABLE KEYS */;
INSERT INTO `typologys` VALUES (1,'Bodubuilding','2023-08-04 08:53:21'),(2,'Cardio','2023-08-04 08:53:21');
/*!40000 ALTER TABLE `typologys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `surname` varchar(30) NOT NULL,
  `gender` enum('Male','Female','Other') NOT NULL,
  `interest` enum('Bodybuilding','Cardio','Unknown') NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `registrationCode` varchar(100) DEFAULT NULL,
  `recoverPassCode` varchar(100) DEFAULT NULL,
  `active` tinyint(1) DEFAULT '0',
  `avatar` varchar(100) DEFAULT NULL,
  `role` enum('admin','normal') DEFAULT 'normal',
  `modifiedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Marina','Adolfin','Female','Unknown','admin@gmail.com','$2b$10$FXsagZCHboL5UyLdv8cQMeDq9CfqObZibEo/neFwcegmE6NbQa16K',NULL,NULL,1,NULL,'admin',NULL,'2023-08-04 08:53:21');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-04 12:21:41
