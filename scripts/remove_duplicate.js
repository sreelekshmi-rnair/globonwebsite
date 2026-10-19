const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();
const dataFile = path.join(__dirname, '..', 'data', 'services.json');

async function main() {
  console.log('Cleaning up duplicate service...');

  // 1. Delete duplicate from MySQL
  await prisma.service.deleteMany({
    where: {
      OR: [
        { id: 6 },
        { slug: 'education-loan-assistancey' }
      ]
    }
  });
  console.log('Deleted duplicate from MySQL.');

  // 2. Delete duplicate from services.json
  const raw = fs.readFileSync(dataFile, 'utf-8');
  const services = JSON.parse(raw);
  const filtered = services.filter((s) => String(s.id) !== '6' && s.slug !== 'education-loan-assistancey');
  fs.writeFileSync(dataFile, JSON.stringify(filtered, null, 2), 'utf-8');
  console.log(`Cleaned services.json: remaining count = ${filtered.length}`);

  // List remaining
  const remaining = await prisma.service.findMany();
  console.log('Remaining in MySQL:');
  console.table(remaining.map(s => ({ id: s.id, slug: s.slug, title: s.title })));

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
