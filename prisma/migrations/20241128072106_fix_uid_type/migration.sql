/*
  Warnings:

  - The primary key for the `farmers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[farmer_uid]` on the table `capture_results` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[farmer_uid]` on the table `history_alerts` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `capture_results` DROP FOREIGN KEY `capture_results_farmer_uid_fkey`;

-- DropForeignKey
ALTER TABLE `history_alerts` DROP FOREIGN KEY `history_alerts_farmer_uid_fkey`;

-- DropForeignKey
ALTER TABLE `target_alerts` DROP FOREIGN KEY `target_alerts_farmer_uid_fkey`;

-- AlterTable
ALTER TABLE `capture_results` MODIFY `farmer_uid` VARCHAR(256) NOT NULL;

-- AlterTable
ALTER TABLE `farmers` DROP PRIMARY KEY,
    MODIFY `uid` VARCHAR(256) NOT NULL,
    ADD PRIMARY KEY (`uid`);

-- AlterTable
ALTER TABLE `history_alerts` MODIFY `farmer_uid` VARCHAR(256) NOT NULL;

-- AlterTable
ALTER TABLE `target_alerts` MODIFY `farmer_uid` VARCHAR(256) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `capture_results_farmer_uid_key` ON `capture_results`(`farmer_uid`);

-- CreateIndex
CREATE UNIQUE INDEX `history_alerts_farmer_uid_key` ON `history_alerts`(`farmer_uid`);

-- AddForeignKey
ALTER TABLE `target_alerts` ADD CONSTRAINT `target_alerts_farmer_uid_fkey` FOREIGN KEY (`farmer_uid`) REFERENCES `farmers`(`uid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `capture_results` ADD CONSTRAINT `capture_results_farmer_uid_fkey` FOREIGN KEY (`farmer_uid`) REFERENCES `farmers`(`uid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `history_alerts` ADD CONSTRAINT `history_alerts_farmer_uid_fkey` FOREIGN KEY (`farmer_uid`) REFERENCES `farmers`(`uid`) ON DELETE RESTRICT ON UPDATE CASCADE;
