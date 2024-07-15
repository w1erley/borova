import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function GET(req) {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.searchParams);
  const memberId = searchParams.get('memberId');

  try {
    // Assuming memberId is used to fetch member details from Prisma
    const member = await prisma.member.findUnique({
      where: {
        id: memberId,
      },
    });

    if (!member) {
      return NextResponse.json({ error: 'Member not found' }, { status: 404 });
    }

    // Directory path where files are stored, adjust as per your project structure
    const directoryPath = path.join(process.cwd(), 'public', member.profilePhotosPath, 'photos');

    // Read the directory and fetch file names
    const files = await fs.promises.readdir(directoryPath);

    return NextResponse.json({ files, profilePath: member.profilePhotosPath });
  } catch (error) {
    console.error('Error fetching files:', error);
    return NextResponse.json({ error: 'Failed to fetch files' }, { status: 500 });
  }
}