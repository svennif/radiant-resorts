/*
  Warnings:

  - You are about to drop the column `city` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `website` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `zip` on the `Hotel` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Hotel" DROP COLUMN "city",
DROP COLUMN "country",
DROP COLUMN "email",
DROP COLUMN "phone",
DROP COLUMN "state",
DROP COLUMN "website",
DROP COLUMN "zip",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL;
