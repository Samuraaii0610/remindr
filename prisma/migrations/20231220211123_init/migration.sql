/*
  Warnings:

  - You are about to drop the `belong` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `belong` DROP FOREIGN KEY `Belong_groupIDb_fkey`;

-- DropForeignKey
ALTER TABLE `belong` DROP FOREIGN KEY `Belong_userIDb_fkey`;

-- DropTable
DROP TABLE `belong`;

-- CreateTable
CREATE TABLE `_GroupMembers` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_GroupMembers_AB_unique`(`A`, `B`),
    INDEX `_GroupMembers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_GroupMembers` ADD CONSTRAINT `_GroupMembers_A_fkey` FOREIGN KEY (`A`) REFERENCES `Groups`(`id_Group`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GroupMembers` ADD CONSTRAINT `_GroupMembers_B_fkey` FOREIGN KEY (`B`) REFERENCES `Users`(`id_User`) ON DELETE CASCADE ON UPDATE CASCADE;
