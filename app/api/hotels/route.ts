import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const skip = req.nextUrl.searchParams.get("skip");
    const take = req.nextUrl.searchParams.get("take");

    const hotels = await prisma.hotel.findMany({
        skip: skip ? parseInt(skip, 10) : undefined,
        take: take ? parseInt(take, 10) : undefined,
    });
    return NextResponse.json(hotels);
}

export async function POST(req: Request) {
    const session = await getServerSession();
    if (!session) {
        return new NextResponse(null, { status: 401 });
    }

    const json = await req.json();

    const created = await prisma.hotel.create({
        data: json,
    });

    return new NextResponse(JSON.stringify(created), { status: 201 });
}
