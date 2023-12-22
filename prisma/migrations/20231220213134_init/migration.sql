/*
  Warnings:

  - You are about to drop the `_groupmembers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_groupmembers` DROP FOREIGN KEY `_GroupMembers_A_fkey`;

-- DropForeignKey
ALTER TABLE `_groupmembers` DROP FOREIGN KEY `_GroupMembers_B_fkey`;

-- DropTable
DROP TABLE `_groupmembers`;

-- CreateTable
CREATE TABLE `Belong` (
    `userIDb` INTEGER NOT NULL,
    `groupIDb` INTEGER NOT NULL,

    PRIMARY KEY (`userIDb`, `groupIDb`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Belong` ADD CONSTRAINT `Belong_userIDb_fkey` FOREIGN KEY (`userIDb`) REFERENCES `Users`(`id_User`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Belong` ADD CONSTRAINT `Belong_groupIDb_fkey` FOREIGN KEY (`groupIDb`) REFERENCES `Groups`(`id_Group`) ON DELETE RESTRICT ON UPDATE CASCADE;
