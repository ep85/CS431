-- phpMyAdmin SQL Dump
-- version 4.2.5
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Dec 05, 2015 at 10:34 PM
-- Server version: 5.5.38
-- PHP Version: 5.5.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `taskmanagement`
--

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
`id` int(11) NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=45 ;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `description`) VALUES
(42, 'knklnl', 'nlnlkn'),
(43, 'grocery', 'my gro'),
(44, 'zd', 'zsd');

-- --------------------------------------------------------

--
-- Table structure for table `project_to_user`
--

CREATE TABLE `project_to_user` (
  `project_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `owner` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project_to_user`
--

INSERT INTO `project_to_user` (`project_id`, `user_id`, `owner`) VALUES
(42, 1, 1),
(43, 1, 1),
(44, 1, 1),
(42, 3, 0);

-- --------------------------------------------------------

--
-- Table structure for table `subtask`
--

CREATE TABLE `subtask` (
`id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `subtask`
--

INSERT INTO `subtask` (`id`, `title`) VALUES
(1, 'Give this group a 100'),
(2, 'asd'),
(3, 'DOne'),
(4, 'asdasd'),
(5, 'klmk'),
(6, 'jnjn'),
(7, 'nklkn'),
(8, 'lkkl'),
(9, 'lkmlkm'),
(10, ',;m;m;lm;m'),
(11, 'kmlm'),
(12, 'mmkmkkm'),
(13, 'kmmlkmlkm'),
(14, 'mmlmlmlm'),
(15, 'erewr'),
(16, 'wer'),
(17, 'kmklm'),
(18, 'm m,'),
(19, 'kmkm');

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
`id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(1000) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `project_id`, `title`, `description`) VALUES
(2, 31, 'zczdf', 'dsfzdf'),
(10, 43, 'zsd', 'zxc'),
(11, 43, 'jknjk', ''),
(12, 43, 'mlmlml', ', ,m'),
(13, 42, 'asd', 'ad'),
(14, 42, 'asd', 'asd');

-- --------------------------------------------------------

--
-- Table structure for table `task_to_subtask`
--

CREATE TABLE `task_to_subtask` (
  `task_id` int(11) NOT NULL,
  `subtask_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task_to_subtask`
--

INSERT INTO `task_to_subtask` (`task_id`, `subtask_id`) VALUES
(3, 1),
(3, 2),
(3, 3),
(4, 4),
(7, 5),
(7, 6),
(7, 7),
(7, 8),
(7, 9),
(7, 10),
(7, 11),
(7, 12),
(7, 13),
(7, 14),
(6, 15),
(6, 16),
(10, 17),
(10, 18),
(10, 19);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
`id` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`email`, `password`, `id`) VALUES
('eric', '123', 1),
('dustin', '123', 2),
('urvesh', '123', 3),
('alexis', '123', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subtask`
--
ALTER TABLE `subtask`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=45;
--
-- AUTO_INCREMENT for table `subtask`
--
ALTER TABLE `subtask`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;