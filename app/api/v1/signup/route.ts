import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prismaClient = new PrismaClient();

export async function POST(req: NextRequest) {
}

// singelton to overcome DB issues while running

export async function GET(req: NextRequest) {
    // req.body

    //extracting body
    const user = await prismaClient.user.findFirst();
      

    return NextResponse.json({
        user
    })
}
