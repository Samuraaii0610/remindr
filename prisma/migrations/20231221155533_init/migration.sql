/*
  Warnings:

  - You are about to drop the column `authorID` on the `groups` table. All the data in the column will be lost.
  - You are about to drop the column `groupID` on the `groups` table. All the data in the column will be lost.
  - You are about to drop the column `task` on the `groups` table. All the data in the column will be lost.
  - Made the column `authorID` on table `reminds` required. This step will fail if there are existing NULL values in that column.
  - Made the column `groupID` on table `reminds` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `reminds` DROP FOREIGN KEY `Reminds_authorID_fkey`;

-- DropForeignKey
ALTER TABLE `reminds` DROP FOREIGN KEY `Reminds_groupID_fkey`;

-- AlterTable
ALTER TABLE `groups` DROP COLUMN `authorID`,
    DROP COLUMN `groupID`,
    DROP COLUMN `task`;

-- AlterTable
ALTER TABLE `reminds` MODIFY `authorID` INTEGER NOT NULL,
    MODIFY `groupID` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Reminds` ADD CONSTRAINT `Reminds_authorID_fkey` FOREIGN KEY (`authorID`) REFERENCES `Users`(`id_User`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reminds` ADD CONSTRAINT `Reminds_groupID_fkey` FOREIGN KEY (`groupID`) REFERENCES `Groups`(`id_Group`) ON DELETE RESTRICT ON UPDATE CASCADE;
