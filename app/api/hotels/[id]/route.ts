import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function GET(request: Request, { params: { id: string } }) {
    const id = params.id;
    const hotels = await prisma.hotel.findUnique({
        where: {
            id: parseInt(id, 10),
        },
    });

    return NextResponse.json(hotels);
}

export async function PUT(request: Request, { params: { id: string } }) {
    const id = params.id;
    const json = await request.json();

    const updated = await prisma.hotel.update({
        where: {
            id: parseInt(id, 10),
        },
        data: {
            name: json.name || null,
            address: json.address || null,
        }
    });

    return new NextResponse(JSON.stringify(updated), {
        status: 201,
    });
}

export async function PATCH(request: Request, { params: { id: string } }) {
    const id = params.id;
    const json = await request.json();

    const updated = await prisma.hotel.update({
        where: {
            id: parseInt(id, 10),
        },
        data: json,
    });

    return new NextResponse(JSON.stringify(updated), {
        status: 201,
    });
}

export async function DELETE(request: Request, { params: { id: string } }) {
    const id = params.id;

    await prisma.hotel.delete({
        where: {
            id: parseInt(id, 10),
        },
    });

    return new NextResponse(null, {
        status: 204,
    });
}