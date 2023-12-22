/*
  Warnings:

  - You are about to drop the column `color` on the `reminds` table. All the data in the column will be lost.
  - You are about to drop the column `end_date` on the `reminds` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `reminds` DROP FOREIGN KEY `Reminds_authorID_fkey`;

-- AlterTable
ALTER TABLE `reminds` DROP COLUMN `color`,
    DROP COLUMN `end_date`,
    MODIFY `authorID` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Reminds` ADD CONSTRAINT `Reminds_authorID_fkey` FOREIGN KEY (`authorID`) REFERENCES `Users`(`id_User`) ON DELETE SET NULL ON UPDATE CASCADE;
