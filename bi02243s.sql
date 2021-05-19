-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 19, 2021 at 03:59 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bi02243s`
--

-- --------------------------------------------------------

--
-- Table structure for table `apply`
--

CREATE TABLE `apply` (
  `idPost` int(11) NOT NULL,
  `idApplier` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `apply`
--

INSERT INTO `apply` (`idPost`, `idApplier`) VALUES
(76, 117);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(33) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(7, 'Animaux'),
(1, 'Bricolage'),
(11, 'Bureautique'),
(3, 'Déménagement'),
(4, 'Dépanage'),
(5, 'Entretien'),
(9, 'Evenement'),
(10, 'Formation'),
(2, 'Informatique'),
(12, 'Mode'),
(8, 'Photographie - Vidéo'),
(14, 'Restauration'),
(6, 'Services véhiculés'),
(13, 'Sport');

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `idOwner` int(11) DEFAULT NULL,
  `idCategory` int(11) DEFAULT NULL,
  `datePublication` varchar(10) DEFAULT NULL,
  `title` varchar(1000) DEFAULT NULL,
  `startDate` varchar(10) DEFAULT NULL,
  `endDate` varchar(10) DEFAULT NULL,
  `postalCode` int(11) DEFAULT NULL,
  `city` varchar(33) DEFAULT NULL,
  `description` text,
  `price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `idOwner`, `idCategory`, `datePublication`, `title`, `startDate`, `endDate`, `postalCode`, `city`, `description`, `price`) VALUES
(74, 116, 1, '19/05/2021', 'Cherche Carrelage', '27/05/2021', '29/05/2021', 74, 'Saint Jorioz', 'Bonjour, je souhaite modifier ma terrasse et poser des dalles sur plot. Surface environ 20M2', 25),
(76, 114, 1, '19/05/2021', 'Cherche Menuiserie - Huisserie', '04/05/2021', '07/05/2021', 11, 'Leucate', 'Bonjour, cherche a faire monté une porte fenêtre sur leucate', 12),
(77, 120, 1, '19/05/2021', 'Cherche Peinture - Tapisserie', '21/05/2021', '23/05/2021', 78, 'Les Mureaux', 'Bonjour, je cherche une personne en urgence Pour peindre le plafond de ma salle de bain', 37),
(78, 117, 3, '19/05/2021', 'Cherche Manutention', '12/05/2021', '12/05/2021', 1, 'Villeneuve', 'Bonjour, je cherche 4 bras pour monter 1 banquette au 5ème pas ascenceur', 15),
(79, 112, 5, '19/05/2021', 'Cherche Jardinier - Pluneret', '19/05/2021', '21/05/2021', 69, 'Lyon', 'Bonjour, je souhaite faire appel à un jardinier. Merci', 5),
(80, 119, 14, '19/05/2021', 'Cherche Dépannage électroménager', '29/05/2021', '30/05/2021', 93, 'Saint Denis', 'Bonjour, J aimerais savoir si quelqu un si connaît en réparation de frigidaire. Je pense que la bonbonne est percé. Ce matin ça fuyait je l ai donc éteint. Il y avait une odeur particulière ressemblant à celle de l essence.', 23),
(81, 113, 4, '19/05/2021', 'Cherche Réparation objets', '13/05/2021', '27/05/2021', 11, 'Carcassonne', 'Bonjour, je cherche un technicien pour réparer le thermostat d une trempeuse pour chocolat chocolate 10 . cordialement.', 12),
(82, 118, 4, '19/05/2021', 'Cherche Réparation outillage', '20/05/2021', '22/05/2021', 76, 'La fontelaye', 'Bonjour, je voulais savoir si il y a une personne qui puisse voir ma débroussailleuse car elle a du mal à démarrer et cale à chaque utilisation Metci', 12),
(83, 108, 1, '19/05/2021', 'Cherche Bricolage - Petits travaux ', '20/05/2021', '28/05/2021', 26, 'Valence', 'Bonjour, je cherche quelqu un pour poser une étagère dans un placard. Il faut en déplacer 2 ça je peux le faire mais je n ai pas de scie pour l autre à la bonne taille Merci Sophie', 12),
(84, 108, 6, '19/05/2021', 'Cherche Covoiturage (partage de frais) ', '20/05/2021', '27/05/2021', 31, 'Toulouse', 'Bonjour, je cherche une personne pouvant emmener mon ami et la personne qui l accompagne pour aller faire des courses et autres vous conduisez la voiture de mon ami elle a besoin de rouler il es mal voyant ne peut plus s en servit il a droit a aucune aide .pour mardi 10h et sa peut être', 52),
(85, 121, 14, '19/05/2021', 'Cherche Gateau anniversaire - cake art', '22/05/2021', '22/05/2021', 77, 'Dammarie-Lès-Lys', 'Bonjour, j aurais besoin d un gâteau d anniversaire (2 ans) sur le théme princesse pour dimanche 23 mai matin. Je recherche une personne amateur de bon niveau ou pro à proximité qui saurait faire ça. Merci d avance.', 212),
(86, 122, 5, '19/05/2021', 'Cherche Entretien - Réparation autres véhicules ', '03/06/2021', '06/06/2021', 69, 'Lyon', 'Bonjour, je recherche un mécano pour réparer un chariot élévateur.', 62),
(87, 122, 13, '19/05/2021', 'Cherche Coach running ', '20/05/2021', '28/05/2021', 31, 'Toulouse', 'Bonjour, je cherche un coach pour reprendre le sport. J ai pas mal de poids à perdre. J attends vos message avec programme et tarif car je n ai jamais fait appel à un coach. La pratique du tennis serais un gros plus, je suis pas très fan de courir pour courir', 34),
(88, 122, 2, '19/05/2021', 'Cherche Assistance informatique', '21/05/2021', '29/05/2021', 75, 'Paris', 'Bonjour, Je recherche une personne pour installation d une imprimante/scanner et conseils et mise à jour PC. Etudiant ou retraité de l informatique habitant Genas ou Chassieu - 69 Demandeur éventuel pour cours .', 78),
(89, 111, 9, '19/05/2021', 'Cherche DJ - Disc Jockey', '19/08/2022', '31/08/2202', 42, 'Saint-Chamond', 'Bonjour, je me marie en août 2022 nous cherchons une personne pour faire dj et animé nous avons le matériel.nous cherchons aussi quelqu un pour aider en cuisine.n hésiter pas à nous contacter', 122),
(90, 124, 10, '19/05/2021', 'Cherche Soutien scolaire ', '19/05/2021', '25/09/2021', 1, 'Éloise', 'Bonjour, Je suis à la recherche d un soutien scolaire pour un enfant de 12 ans en classe de 5ème pour des cours de soutien en français, anglais et mathématique 2 fois par semaine d une heure. Le règlement se fera en chèque emploi service Merci de bien vouloir me faire des propositions Cordialement', 512),
(91, 125, 12, '19/05/2021', 'Cherche Coiffure à domicile', '20/05/2021', '21/05/2021', 42, 'Saint-Etienne', 'Bonjour, je recherche une coiffeuse à domicile sur Montbartier pour la mère de 77 ans, cheveux courts. Prix raisonnable. merci. cordialement. Nataly', 25),
(92, 125, 11, '19/05/2021', 'Cherche Assistance juridique ', '19/05/2021', '29/01/2022', 42, 'Saint-Etienne', 'Bonjour, je cherche une personne qui sais bien ecrire et savoir rédiger des courrier je doit ecrire a certain organisme mes je ne sais pas j ecrit d habitude mes la mdph des dossier une demande pour tribunal et d autre chose si vous pouviez m aider svp urgent merci ', 600),
(93, 126, 8, '19/05/2021', 'Cherche Photographe', '20/05/2021', '22/05/2021', 39, 'Lajoux', 'Bonjour, besoin d un photographe pour un anniversaire', 42),
(94, 126, 7, '19/05/2021', 'Cherche Garde chien ', '06/05/2021', '05/06/2021', 57, 'Metz', 'Bonjour, Je recherche une personne qui pourrait me garder mon petit chien (carlin) du 20 juin au 14 juillet', 39);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(33) DEFAULT NULL,
  `mail` varchar(33) DEFAULT NULL,
  `color` varchar(7) DEFAULT NULL,
  `money` int(11) DEFAULT NULL,
  `postalCode` int(11) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `pseudo`, `mail`, `color`, `money`, `postalCode`, `city`, `isAdmin`, `password`) VALUES
(108, 'antoine', 'antoine@antoine.com', '#06ea30', 955, 69, 'Lyon', 1, '$2y$10$UYu.oplRz93NpXnV9ynIwetaSWa2BVKLbwwyOlgBoLb0G9OCdxGb.'),
(111, 'admin', 'admin@admin.com', '#b0d61b', 995, 13, 'Moulins', 1, '$2y$10$lj0yJiphHLzFwptIy0K21um5v4pawfq82KAGH3RS1ijAA3jW.BRwa'),
(112, 'idriss', 'idriss@idriss.com', '#2abf05', 336, 42, 'Saint-Etienne', 1, '$2y$10$QVTcc6LGl79Ujs/q8IBrHu.ikoaQdiRBdeJgKzckVrPKKpIDfP3KW'),
(113, 'herve', 'herve@gmail.com', '#c26324', 1000, 69, 'Lyon', 0, '$2y$10$WYuXevzVHS/BHpxGcyWZQ.MsqVsEa6RLkgn9N.p7VxOsevZD4wBBG'),
(114, 'michel', 'michel@gmail.com', '#8f06ea', 1099, 42, 'Saint-Etienne', 0, '$2y$10$ov61M2tVAmtEzUmK/Tr98uJbxn18Q8/kc4BNHlijJjlVyWItYnnDq'),
(116, 'sardou', 'sardou@gmail.com', '#4706ea', 1000, 42, 'Feurs', 0, '$2y$10$fuvY1CDVs2eFia4Bl9a1BOE20jykFiIEypzugzxxoRmgwRTlVRroC'),
(117, 'bruel', 'bruel@gmail.com', '#ea8306', 1000, 42, 'Rive-de-Gier', 0, '$2y$10$eL1qAEqe5YNcAxhPkvC10OW0KmhGCwohlxCvnwrPZXi8WrsuVbERW'),
(118, 'sebastien', 'sebastien@gmail.com', '#c188f1', 1000, 69, 'St-Foy', 0, '$2y$10$GcDnPytsZi31ovijnxkxEeT8lWZvwXdPBa.uCyUxlg6HAT0AeXp3S'),
(119, 'pablo', 'pablo@gmail.com', '#34559d', 1000, 29, 'Finistère', 0, '$2y$10$7SII0PTHUJzhqF3zgpV5jOAoj.I1GQkPTnrVn70pnKbBq42CjUO4O'),
(120, 'christophe', 'christophe@gmail.com', '#06eac0', 1000, 13, 'Moulins', 0, '$2y$10$KEUCrexoteTW91JC6jfiku4sJ/M/v5kRkyBUBjQE57OhplmtqqfgC'),
(121, 'pierre', 'pierre@gmail.com', '#ea0606', 1000, 35, 'Rennes', 0, '$2y$10$/OeBNr3wcWR5I8EjkQRAAeXEDD96oE9YR8X7XnkmzTKSjGaD5ofLq'),
(122, 'marwan', 'benguezzoumarwan25@gmail.com', '#f5f915', 1002, 42, 'saint etienne', 0, '$2y$10$VuqzJ2ZC77Ioqsi12DEOkuJBxr0fqpFEWhTEo7gXH56f5WTgqvYEK'),
(124, 'Dario', 'dario@gmail.com', '#ffc617', 1000, 42, 'Saint-Etienne', 0, '$2y$10$zCPT3.pydZTUg0YmB2NUmevPYcvUB87/uyYOVJbe4VLzAIvCRH7Gy'),
(125, 'islem', 'islem@gmail.com', '#289395', 1000, 69, 'Lyon', 0, '$2y$10$3uTYXXP6ilYSk6y4frordu/d3hYQxRb0/e94B.Bpsfwy7wcQz2TJu'),
(126, 'EINstone', 'einstone@einstone.ein', '#cdf595', 1000, 42, 'Saint-Etienne', 1, '$2y$10$0w56OhXqD60l4gx0qIShVe/IF0vXjLmbVwxfhpWEl7gDl/OEJuHya');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `apply`
--
ALTER TABLE `apply`
  ADD PRIMARY KEY (`idPost`,`idApplier`),
  ADD UNIQUE KEY `idPost` (`idPost`,`idApplier`),
  ADD KEY `apply_ibfk_2` (`idApplier`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_ibfk_1` (`idOwner`),
  ADD KEY `post_ibfk_2` (`idCategory`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pseudo` (`pseudo`),
  ADD UNIQUE KEY `mail` (`mail`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `apply`
--
ALTER TABLE `apply`
  ADD CONSTRAINT `apply_ibfk_1` FOREIGN KEY (`idPost`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `apply_ibfk_2` FOREIGN KEY (`idApplier`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`idOwner`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `post_ibfk_2` FOREIGN KEY (`idCategory`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
