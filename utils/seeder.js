// seeder.ts (or seeder.js for JavaScript)

const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid'); // Import uuidv4 from uuid package

const prisma = new PrismaClient();
const PUBLIC_FOLDER = path.join(process.cwd(), '../', 'public');

async function seedDatabase() {
  try {
    // Sample member data
    const members = [
      { name: 'Володимир', bio: 'UR4UMO' },
      { name: 'Антон', bio: 'UR4UPQ' },
      { name: 'Олександр', bio: 'UY5US' }
    ];

    // Create members and their respective photo folders
    for (const memberData of members) {
      const id = uuidv4();
      const member = await prisma.member.create({
        data: {
          name: memberData.name,
          bio: memberData.bio,
          profilePhotosPath: `images/members/${id}`,
          images: []
        }
      });

      const memberFolder = path.join(PUBLIC_FOLDER, 'images', 'members', `${id}`);
      if (!fs.existsSync(memberFolder)) {
        fs.mkdirSync(memberFolder, { recursive: true });
        console.log(`Created folder for member ${member.name}: ${memberFolder}`);
      }
    }

    console.log('Database seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();
