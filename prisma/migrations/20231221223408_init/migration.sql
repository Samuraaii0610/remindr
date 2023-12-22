/*
  Warnings:

  - Added the required column `color` to the `Reminds` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reminds` ADD COLUMN `color` VARCHAR(191) NOT NULL;
