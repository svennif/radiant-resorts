import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

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
                email: "testadmin@holidaze",
                name: "Test Admin",
                password: "password",
            },
        ],
    });

    const hotels = [
        {
            name: "Bind Hotel",
            address: "123 Bind St",
            description: "A hotel located in the heart of Bind.",
            price: 150.0,
            rating: 4.5,
            userId: 1,
            image: "/public/images/1.webp",
            imageCreds: "Photo by Vojtech Bruzek on Unsplash",
        },
        {
            name: "Haven Hotel",
            address: "456 Haven St",
            description: "A luxurious hotel located in Haven.",
            price: 200.0,
            rating: 4.8,
            userId: 2,
            image: "/public/images/2.webp",
            imageCreds: "Photo by Qui Nguyen on Unsplash",
        },
        {
            name: "Split Suites",
            address: "789 Split Ave",
            description: "A modern hotel located in Split.",
            price: 175.0,
            rating: 4.6,
            userId: 1,
            image: "/public/images/3.webp",
            imageCreds: "Photo by Linus Mimietz on Unsplash",
        },
        {
            name: "Ascent Inn",
            address: "1010 Ascent Blvd",
            description: "A high-rise hotel located in Ascent.",
            price: 225.0,
            rating: 4.9,
            userId: 2,
            image: "/public/images/4.webp",
            imageCreds: "Photo by Franck Morisset on Unsplash",
        },
        {
            name: "Breeze Hotel",
            address: "234 Breeze St",
            description: "A hotel located in the heart of Breeze.",
            price: 120.0,
            rating: 4.2,
            userId: 2,
            image: "/public/images/5.webp",
            imageCreds: "Photo by Patrick Robert Doyle on Unsplash",
        },
        {
            name: "Icebox Inn",
            address: "567 Icebox Ave",
            description: "A cozy hotel located in Icebox.",
            price: 180.0,
            rating: 4.7,
            userId: 1,
            image: "/public/images/6.webp",
            imageCreds: "Photo by Sasha Kaunas on Unsplash",
        },
        {
            name: "Havenview Hotel",
            address: "890 Havenview Blvd",
            description: "A hotel with a stunning view of Haven.",
            price: 250.0,
            rating: 4.9,
            userId: 1,
            image: "/public/images/7.webp",
            imageCreds: "Photo by Reagan M on Unsplash",
        },
        {
            name: "Breezeview Suites",
            address: "1111 Breezeview St",
            description: "A hotel with a stunning view of Breeze.",
            price: 200.0,
            rating: 4.8,
            userId: 2,
            image: "/public/images/8.webp",
            imageCreds: "Photo by Antonio Janeski on Unsplash",
        },
        {
            name: "Splitview Hotel",
            address: "1313 Splitview Ave",
            description: "A hotel with a stunning view of Split.",
            price: 220.0,
            rating: 4.7,
            userId: 2,
            image: "/public/images/9.webp",
            imageCreds: "Photo by Ridhwan Nordin on Unsplash",
        },
        {
            name: "Ascentview Suites",
            address: "1515 Ascentview Blvd",
            description: "A hotel with a stunning view of Ascent.",
            price: 300.0,
            rating: 5.0,
            userId: 1,
            image: "/public/images/10.webp",
            imageCreds: "Photo by Toa Heftiba on Unsplash",
        },
    ];

    for (const hotel of hotels) {
        const image = fs.readFileSync(path.join(__dirname, hotel.image), null);
        await prisma.hotel.create({
            data: {
                ...hotel,
                image: image,
            },
        });
    }
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
