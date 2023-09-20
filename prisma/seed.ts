import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const password = await bcrypt.hash("password", 10);
    const user = await prisma.user.createMany({
        data: [
            {
                email: "test@test.com",
                name: "Sven",
                password,
            },
            {
                email: "test2@test.com",
                name: "Sven2",
                password,
            },
        ]
    });
    console.log({ user });

    const hotel = await prisma.hotel.createMany({
        data: [
            {
                name: "Radiant Retreat",
                address: "123 Valorant Lane, Haven City",
                userId: 1,
            },
            {
                name: "Breeze Bungalows",
                address: "456 Vortex View, Breeze Island",
                userId: 1,
            },
            {
                name: "Bind Bliss Hotel",
                address: "789 Bind Boulevard, Bind Town",
                userId: 1,
            },
            {
                name: "Ascent Abode",
                address: "101 Heaven Heights, Ascent Valley",
                userId: 1,
            },
            {
                name: "Icebox Inn",
                address: "555 Frosty Road, Icebox Village",
                userId: 1,
            },
            {
                name: "Split Serenity Suites",
                address: "777 Split Street, Split City",
                userId: 1,
            },
            {
                name: "Haven Hideaway Hotel",
                address: "222 Radiant Road, Haven Haven",
                userId: 1,
            },
            {
                name: "Astra's Astral Inn",
                address: "333 Starry Skies Street, Celestial City",
                userId: 1,
            },
            {
                name: "Valor View Lodge",
                address: "444 Valorant Vista, Valor View",
                userId: 1,
            },
            {
                name: "Phoenix Plaza Hotel",
                address: "666 Ignition Avenue, Phoenix Point",
                userId: 1,
            },
        ],
    });

    console.log("Created hotels: ", hotel.count);
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
