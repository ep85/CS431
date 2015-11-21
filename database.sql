-- phpMyAdmin SQL Dump
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Nov 21, 2015 at 10:20 PM
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=30 ;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `description`) VALUES
(1, 'grocery list', 'this is my grocery list'),
(2, 'asd', 'asd'),
(4, 'asd', 'asd'),
(5, 'asdaaosdjopasjd', 'asdopasjdopasjd'),
(6, '213asd', 'asdasdasd'),
(7, '1123213asd', 'asd'),
(8, 'asdasd', '123123'),
(9, 'asd', 'asd'),
(10, '', ''),
(11, 'ads', 'asd'),
(12, 'adsdd', 'asdff'),
(13, 'asd', 'asd'),
(14, 'asd', 'asd'),
(15, 'asd', 'asd'),
(16, 'asd', 'asd'),
(17, 'asd', 'asd'),
(18, 'asd', 'asd'),
(19, 'asd', 'asd'),
(20, 'asd', 'asd'),
(21, 'asd', 'asd'),
(22, 'asd', 'asd'),
(23, 'asd', 'asd'),
(24, 'asd', 'asd'),
(25, 'asd', 'asd'),
(26, 'asd', 'asd'),
(27, 'asd', 'asd'),
(28, 'asd', 'asd'),
(29, 'asd', 'asd');

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
(1, 1, 0),
(0, 0, 1),
(0, 0, 1),
(0, 0, 1),
(0, 0, 1),
(0, 0, 1),
(0, 0, 1),
(0, 0, 1),
(0, 0, 1),
(0, 0, 1),
(0, 0, 1),
(0, 0, 1),
(0, 0, 1),
(0, 0, 1),
(0, 0, 1),
(0, 0, 1),
(0, 0, 1),
(0, 0, 1),
(0, 0, 1),
(0, 0, 1),
(0, 0, 1),
(0, 0, 1),
(0, 0, 1),
(0, 0, 1),
(0, 1, 1),
(0, 1, 1),
(0, 1, 1),
(0, 1, 1),
(21, 1, 1),
(22, 1, 1),
(0, 1, 1),
(0, 1, 1),
(0, 1, 1),
(0, 1, 1),
(0, 1, 1),
(0, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `subtask`
--

CREATE TABLE `subtask` (
`id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
`id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `task_to_subtask`
--

CREATE TABLE `task_to_subtask` (
  `task_id` int(11) NOT NULL,
  `subtask_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
`id` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`email`, `password`, `id`) VALUES
('eric', '123', 1),
('dustin', '123', 2);

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
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=30;
--
-- AUTO_INCREMENT for table `subtask`
--
ALTER TABLE `subtask`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;