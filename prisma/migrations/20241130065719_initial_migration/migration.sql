-- CreateTable
CREATE TABLE `farmers` (
    `uid` VARCHAR(256) NOT NULL,
    `email` VARCHAR(256) NOT NULL,
    `name` VARCHAR(256) NOT NULL,

    UNIQUE INDEX `farmers_email_key`(`email`),
    PRIMARY KEY (`uid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `target_alerts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(256) NULL,
    `chat_id` VARCHAR(256) NULL,
    `phone_number` VARCHAR(20) NULL,
    `farmer_uid` VARCHAR(256) NOT NULL,

    UNIQUE INDEX `target_alerts_farmer_uid_key`(`farmer_uid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `capture_results` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dead_chicken` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `media_url` VARCHAR(256) NOT NULL,
    `is_alert` BOOLEAN NOT NULL,
    `farmer_uid` VARCHAR(256) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `history_alerts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `is_read` BOOLEAN NOT NULL,
    `farmer_uid` VARCHAR(256) NOT NULL,
    `capture_result_id` INTEGER NOT NULL,

    UNIQUE INDEX `history_alerts_farmer_uid_key`(`farmer_uid`),
    UNIQUE INDEX `history_alerts_capture_result_id_key`(`capture_result_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `target_alerts` ADD CONSTRAINT `target_alerts_farmer_uid_fkey` FOREIGN KEY (`farmer_uid`) REFERENCES `farmers`(`uid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `capture_results` ADD CONSTRAINT `capture_results_farmer_uid_fkey` FOREIGN KEY (`farmer_uid`) REFERENCES `farmers`(`uid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `history_alerts` ADD CONSTRAINT `history_alerts_farmer_uid_fkey` FOREIGN KEY (`farmer_uid`) REFERENCES `farmers`(`uid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `history_alerts` ADD CONSTRAINT `history_alerts_capture_result_id_fkey` FOREIGN KEY (`capture_result_id`) REFERENCES `capture_results`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
