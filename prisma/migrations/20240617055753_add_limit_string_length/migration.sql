/*
  Warnings:

  - You are about to alter the column `name` on the `Dish` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1024)`.
  - You are about to alter the column `description` on the `Dish` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1024)`.
  - You are about to alter the column `shortDescription` on the `Dish` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1024)`.
  - You are about to alter the column `recipe` on the `Dish` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1024)`.
  - You are about to alter the column `ingredients` on the `Dish` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1024)`.
  - You are about to alter the column `imageUrl` on the `Dish` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1024)`.
  - You are about to alter the column `name` on the `Reservation` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(64)`.
  - You are about to alter the column `email` on the `Reservation` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `phone` on the `Reservation` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(32)`.
  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(64)`.

*/
-- AlterTable
ALTER TABLE "Dish" ALTER COLUMN "name" SET DATA TYPE VARCHAR(1024),
ALTER COLUMN "description" SET DATA TYPE VARCHAR(1024),
ALTER COLUMN "shortDescription" SET DATA TYPE VARCHAR(1024),
ALTER COLUMN "recipe" SET DATA TYPE VARCHAR(1024),
ALTER COLUMN "ingredients" SET DATA TYPE VARCHAR(1024),
ALTER COLUMN "imageUrl" SET DATA TYPE VARCHAR(1024);

-- AlterTable
ALTER TABLE "Reservation" ALTER COLUMN "name" SET DATA TYPE VARCHAR(64),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "phone" SET DATA TYPE VARCHAR(32);

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(64);
