/*
  Warnings:

  - You are about to drop the column `gameId` on the `genres` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `genres` DROP FOREIGN KEY `Genres_gameId_fkey`;

-- AlterTable
ALTER TABLE `genres` DROP COLUMN `gameId`;

-- CreateTable
CREATE TABLE `GamesOnGenres` (
    `gameId` INTEGER NOT NULL,
    `genreId` INTEGER NOT NULL,

    PRIMARY KEY (`gameId`, `genreId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `GamesOnGenres` ADD CONSTRAINT `GamesOnGenres_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `Game`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GamesOnGenres` ADD CONSTRAINT `GamesOnGenres_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `Genres`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
