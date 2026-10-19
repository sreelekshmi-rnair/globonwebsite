const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();
const dataFile = path.join(__dirname, '..', 'data', 'services.json');

async function main() {
  const raw = fs.readFileSync(dataFile, 'utf-8');
  const services = JSON.parse(raw);

  console.log(`Found ${services.length} services to sync.`);

  for (const s of services) {
    const payload = {
      category: s.category || 'loans-advances',
      categoryTitle: s.categoryTitle || '',
      title: s.title,
      slug: s.slug,
      subtitle: s.subtitle || '',
      shortDesc: s.shortDesc || '',
      heroImage: s.heroImage || s.image || '',
      overviewTitle: s.overviewTitle || '',
      overviewDesc: s.overviewDesc || '',
      overviewImage: s.overviewImage || '',
      overviewBullets: Array.isArray(s.overviewBullets) ? JSON.stringify(s.overviewBullets) : '[]',
      optionsBadge: s.optionsBadge || '',
      optionsTitle: s.optionsTitle || '',
      options: Array.isArray(s.options) ? JSON.stringify(s.options) : '[]',
      features: Array.isArray(s.features) ? JSON.stringify(s.features) : '[]',
      eligibilityDesc: s.eligibilityDesc || '',
      feesDesc: s.feesDesc || '',
      documentGroups: Array.isArray(s.documentGroups) ? JSON.stringify(s.documentGroups) : '[]',
      advisoryNote: s.advisoryNote || '',
      faqs: Array.isArray(s.faqs) ? JSON.stringify(s.faqs) : '[]',
      order: Number(s.order) || 0,
    };

    const existing = await prisma.service.findUnique({ where: { slug: s.slug } });
    if (existing) {
      await prisma.service.update({
        where: { slug: s.slug },
        data: payload,
      });
      console.log(`Updated: ${s.title}`);
    } else {
      await prisma.service.create({
        data: payload,
      });
      console.log(`Created: ${s.title}`);
    }
  }

  // Inspect the clean table rows and column keys
  const allRows = await prisma.service.findMany();
  console.log('--- ALL ROWS IN MYSQL TABLE ---');
  if (allRows.length > 0) {
    console.log('Table Column Headings:', Object.keys(allRows[0]));
    console.log('Sample Row:');
    console.log(JSON.stringify(allRows[0], null, 2));
  }

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
