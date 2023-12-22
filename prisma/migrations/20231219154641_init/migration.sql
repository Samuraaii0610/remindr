-- AlterTable
ALTER TABLE `belong` ADD PRIMARY KEY (`userIDb`, `groupIDb`);

-- AlterTable
ALTER TABLE `users` MODIFY `mdp` VARCHAR(255) NOT NULL;
