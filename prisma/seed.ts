import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const password = await bcrypt.hash("password", 10);
    const user = await prisma.user.createMany({
        data: [
            {
                email: "example1@test.com",
                name: "Svenni",
                password,
            },
            {
                email: "example2@test.com", 
                name: "Svenni2",
                password,
            },
        ],
    });
    console.log({ user });

    const hotels = [
        {
            name: "Bind Hotel",
            address: "123 Bind St",
            description: "A hotel located in the heart of Bind.",
            price: 150.0,
            rating: 4.5,
            userId: 1,
        },
        {
            name: "Haven Hotel",
            address: "456 Haven St",
            description: "A luxurious hotel located in Haven.",
            price: 200.0,
            rating: 4.8,
            userId: 2,
        },
        {
            name: "Split Suites",
            address: "789 Split Ave",
            description: "A modern hotel located in Split.",
            price: 175.0,
            rating: 4.6,
            userId: 1,
        },
        {
            name: "Ascent Inn",
            address: "1010 Ascent Blvd",
            description: "A high-rise hotel located in Ascent.",
            price: 225.0,
            rating: 4.9,
            userId: 2,
        },
        {
            name: "Breeze Hotel",
            address: "234 Breeze St",
            description: "A hotel located in the heart of Breeze.",
            price: 120.0,
            rating: 4.2,
            userId: 2,
        },
        {
            name: "Icebox Inn",
            address: "567 Icebox Ave",
            description: "A cozy hotel located in Icebox.",
            price: 180.0,
            rating: 4.7,
            userId: 1,
        },
        {
            name: "Havenview Hotel",
            address: "890 Havenview Blvd",
            description: "A hotel with a stunning view of Haven.",
            price: 250.0,
            rating: 4.9,
            userId: 1,
        },
        {
            name: "Breezeview Suites",
            address: "1111 Breezeview St",
            description: "A hotel with a stunning view of Breeze.",
            price: 200.0,
            rating: 4.8,
            userId: 2,
        },
        {
            name: "Splitview Hotel",
            address: "1313 Splitview Ave",
            description: "A hotel with a stunning view of Split.",
            price: 220.0,
            rating: 4.7,
            userId: 2,
        },
        {
            name: "Ascentview Suites",
            address: "1515 Ascentview Blvd",
            description: "A hotel with a stunning view of Ascent.",
            price: 300.0,
            rating: 5.0,
            userId: 1,
        },
    ];

    await prisma.hotel.createMany({
        data: hotels,
    });
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
