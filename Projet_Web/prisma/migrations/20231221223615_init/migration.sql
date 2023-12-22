-- DropForeignKey
ALTER TABLE `reminds` DROP FOREIGN KEY `Reminds_groupID_fkey`;

-- AlterTable
ALTER TABLE `reminds` MODIFY `groupID` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Reminds` ADD CONSTRAINT `Reminds_groupID_fkey` FOREIGN KEY (`groupID`) REFERENCES `Groups`(`id_Group`) ON DELETE SET NULL ON UPDATE CASCADE;
