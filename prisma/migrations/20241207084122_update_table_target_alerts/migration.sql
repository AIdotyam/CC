/*
  Warnings:

  - You are about to drop the column `chat_id` on the `target_alerts` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `target_alerts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `target_alerts` DROP COLUMN `chat_id`,
    DROP COLUMN `email`;
