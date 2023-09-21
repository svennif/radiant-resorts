import { prisma } from "@/lib/prisma";

async function getHotels() {
    const res = await prisma.hotel.findMany();
    console.log(res);

    if (!res) {
        throw new Error("No hotels found.");
    }

    return 
}
export default async function Hotels() {
    return (
        <div>
            <h1>Hotels</h1>
        </div>
    );
}
