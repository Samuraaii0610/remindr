-- CreateTable
CREATE TABLE `Groups` (
    `id_Group` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `creation_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Groups_name_key`(`name`),
    PRIMARY KEY (`id_Group`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reminds` (
    `id_Remind` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `bio` VARCHAR(250) NOT NULL,
    `limit_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `authorID` INTEGER NOT NULL,
    `groupID` INTEGER NOT NULL,

    UNIQUE INDEX `Reminds_authorID_key`(`authorID`),
    UNIQUE INDEX `Reminds_groupID_key`(`groupID`),
    PRIMARY KEY (`id_Remind`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id_User` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `surname` VARCHAR(50) NOT NULL,
    `creation_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_User`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Belong` (
    `userIDb` INTEGER NOT NULL,
    `groupIDb` INTEGER NOT NULL,

    UNIQUE INDEX `Belong_userIDb_key`(`userIDb`),
    UNIQUE INDEX `Belong_groupIDb_key`(`groupIDb`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Reminds` ADD CONSTRAINT `Reminds_authorID_fkey` FOREIGN KEY (`authorID`) REFERENCES `Users`(`id_User`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reminds` ADD CONSTRAINT `Reminds_groupID_fkey` FOREIGN KEY (`groupID`) REFERENCES `Groups`(`id_Group`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Belong` ADD CONSTRAINT `Belong_userIDb_fkey` FOREIGN KEY (`userIDb`) REFERENCES `Users`(`id_User`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Belong` ADD CONSTRAINT `Belong_groupIDb_fkey` FOREIGN KEY (`groupIDb`) REFERENCES `Groups`(`id_Group`) ON DELETE RESTRICT ON UPDATE CASCADE;
