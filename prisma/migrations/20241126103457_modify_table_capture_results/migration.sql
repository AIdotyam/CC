/*
  Warnings:

  - You are about to drop the column `dead_count` on the `capture_results` table. All the data in the column will be lost.
  - Added the required column `dead_chicken` to the `capture_results` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `capture_results` DROP COLUMN `dead_count`,
    ADD COLUMN `dead_chicken` BOOLEAN NOT NULL;
