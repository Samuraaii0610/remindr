/*
  Warnings:

  - Added the required column `mdp` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `mdp` VARCHAR(50) NOT NULL;
