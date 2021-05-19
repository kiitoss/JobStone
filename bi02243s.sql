-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 12, 2021 at 06:48 PM
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
(24, 121),
(36, 121),
(37, 121),
(38, 121);

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
  `title` varchar(100) DEFAULT NULL,
  `startDate` varchar(10) DEFAULT NULL,
  `endDate` varchar(10) DEFAULT NULL,
  `postalCode` int(11) DEFAULT NULL,
  `city` varchar(33) DEFAULT NULL,
  `description` tinytext,
  `price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `idOwner`, `idCategory`, `datePublication`, `title`, `startDate`, `endDate`, `postalCode`, `city`, `description`, `price`) VALUES
(24, 108, 2, '12/05/2021', 'Recherche assistance Informatique', '13/05/2021', '21/05/2021', 69, 'Lyon', 'Bonjour, je cherche une personne pour connecter une imprimante HP à ma box.n', 20),
(36, 116, 11, '10/05/2021', 'Cherche Graphisme - Création flyer - plaquette à Chalons En Champagne', '12/05/2021', '26/05/2021', 42, 'Feurs', 'Bonjour, je cherche une personne pour me réaliser un logo. bien cordialement urgent', 15),
(37, 118, 1, '01/05/2021', 'Cherche Installation électrique à Betheniville', '13/05/2021', '27/05/2021', 26, 'Valence', 'Bonjour, Je cherche une personne pour remplacer deux prise standard de volet roulant contre des interrupteurs volet roulant connecté.', 15),
(38, 119, 1, '12/05/2021', 'Cherche Pose de parquet - Revêtement de sol', '29/05/2021', '30/05/2021', 26, 'Valence', 'Bonjour, je recherche une personne compétente pour poser un sol. Merci.', 15),
(39, 121, 3, '12/05/2021', 'Cherche Déménagement', '21/05/2021', '21/05/2021', 12, 'Rodez', 'Bonjour, Je recherche des bras pour le WE pro !', 25);

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
(108, 'antoine', 'antoine@antoine.com', '#2a0179', 1000, 69, 'Lyon', 1, '$2y$10$OtvVaV/z3rBMTtFM58kAUe0s/ZJ8gW8WAxzlcW0Gs4r6hQTqiiDiW'),
(111, 'admin', 'admin@admin.com', '#b0d61b', 1000, 13, 'Moulins', 1, '$2y$10$aomgxYFlkkA15T3UJRWin.OPuJXTHzDwtowdf7FYMq4G.G7P0TOKq'),
(112, 'idriss', 'idriss@idriss.com', '#2abf05', 1000, 42, 'Saint-Etienne', 1, '$2y$10$uo9hIK.r2d.xe6JXPbTh2erMyWhSJHA21E9jHkqcu9bJrM/btzeUi'),
(113, 'herve', 'herve@gmail.com', '#c7775', 1000, 69, 'Lyon', 0, '$2y$10$WYuXevzVHS/BHpxGcyWZQ.MsqVsEa6RLkgn9N.p7VxOsevZD4wBBG'),
(114, 'michel', 'michel@gmail.com', '#afce1', 1000, 42, 'Saint-Etienne', 0, '$2y$10$V1qdG4Vizt23OBdjlGrzjefGb/MMuCNgioTBekosWuQBAVjdb2FQ.'),
(115, 'patrick', 'patrick@gmail.com', '#1b3c2e', 1000, 69, 'Saint-Laurent-de-Chamousset', 0, '$2y$10$ktjhVKJSvEf5k5xcE5owTuAYWplOvSMFyzZmBRZXNUBzHdFLIxTw6'),
(116, 'sardou', 'sardou@gmail.com', '#d587bb', 1000, 42, 'Feurs', 0, '$2y$10$fuvY1CDVs2eFia4Bl9a1BOE20jykFiIEypzugzxxoRmgwRTlVRroC'),
(117, 'bruel', 'bruel@gmail.com', '#8fcb6', 1000, 42, 'Rive-de-Gier', 0, '$2y$10$eL1qAEqe5YNcAxhPkvC10OW0KmhGCwohlxCvnwrPZXi8WrsuVbERW'),
(118, 'sebastien', 'sebastien@gmail.com', '#c188f1', 1000, 69, 'St-Foy', 0, '$2y$10$GcDnPytsZi31ovijnxkxEeT8lWZvwXdPBa.uCyUxlg6HAT0AeXp3S'),
(119, 'pablo', 'pablo@gmail.com', '#34559d', 1000, 29, 'Finistère', 0, '$2y$10$7SII0PTHUJzhqF3zgpV5jOAoj.I1GQkPTnrVn70pnKbBq42CjUO4O'),
(120, 'christophe', 'christophe@gmail.com', '#9c56d', 1000, 13, 'Moulins', 0, '$2y$10$KEUCrexoteTW91JC6jfiku4sJ/M/v5kRkyBUBjQE57OhplmtqqfgC'),
(121, 'pierre', 'pierre@gmail.com', '#21fd0d', 1000, 35, 'Rennes', 0, '$2y$10$/OeBNr3wcWR5I8EjkQRAAeXEDD96oE9YR8X7XnkmzTKSjGaD5ofLq');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;

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
