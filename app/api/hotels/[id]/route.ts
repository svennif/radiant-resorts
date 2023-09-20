import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    const hotels = await prisma.hotel.findUnique({
        where: {
            id: parseInt(id, 10),
        },
    });
    return NextResponse.json(hotels);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    const json = await req.json();

    const updated = await prisma.hotel.update({
        where: {
            id: parseInt(id, 10),
        },
        data: {
            name: json.name || null,
            address: json.address || null,
            userId: json.userId || null,
        },
    });

    return NextResponse.json(updated), { status: 200 };
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    const json = await req.json();

    const updated = await prisma.hotel.update({
        where: {
            id: parseInt(id, 10),
        },
        data: json,
    });

    return NextResponse.json(updated), { status: 200 };
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const id = params.id;

    const deleted = await prisma.hotel.delete({
        where: {
            id: parseInt(id, 10),
        },
    });

    return NextResponse.json(deleted), { status: 204 };
}
