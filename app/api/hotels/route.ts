import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const hotels = await prisma.hotel.findMany();
    return NextResponse.json(hotels);
}

export async function POST(req: Request) {
    const json = await req.json();

    const created = await prisma.hotel.create({
        data: json,
    });

    return new NextResponse(JSON.stringify(created), { status: 201 });
}
