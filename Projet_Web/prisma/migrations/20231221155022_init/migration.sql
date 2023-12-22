-- DropForeignKey
ALTER TABLE `reminds` DROP FOREIGN KEY `Reminds_authorID_fkey`;

-- DropForeignKey
ALTER TABLE `reminds` DROP FOREIGN KEY `Reminds_groupID_fkey`;

-- AlterTable
ALTER TABLE `groups` ADD COLUMN `authorID` INTEGER NULL,
    ADD COLUMN `groupID` INTEGER NULL;

-- AlterTable
ALTER TABLE `reminds` MODIFY `authorID` INTEGER NULL,
    MODIFY `groupID` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Reminds` ADD CONSTRAINT `Reminds_authorID_fkey` FOREIGN KEY (`authorID`) REFERENCES `Users`(`id_User`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reminds` ADD CONSTRAINT `Reminds_groupID_fkey` FOREIGN KEY (`groupID`) REFERENCES `Groups`(`id_Group`) ON DELETE SET NULL ON UPDATE CASCADE;
