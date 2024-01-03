-- CreateTable
CREATE TABLE `Character` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `eyes` VARCHAR(191) NOT NULL,
    `hairs` VARCHAR(191) NOT NULL,
    `birthday` DATETIME(3) NOT NULL,
    `blood` VARCHAR(191) NOT NULL,
    `wand` VARCHAR(191) NOT NULL,
    `patronus` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `house` VARCHAR(191) NOT NULL,
    `actor` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
