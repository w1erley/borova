import prisma from '@/app/lib/prisma';
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const members = await prisma.member.findMany();
    return NextResponse.json({
      members
    });
  }
  catch {
    return NextResponse.json({ error: 'Failed to fetch members' }, { status: 500 });
  }
}