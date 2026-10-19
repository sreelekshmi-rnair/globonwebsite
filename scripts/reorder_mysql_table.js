const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Reordering columns in MySQL table Service to match admin form exactly...');

  const columnOrder = [
    { name: 'category', def: 'VARCHAR(191) NOT NULL DEFAULT "loans-advances"', after: 'id' },
    { name: 'categoryTitle', def: 'VARCHAR(191) NULL DEFAULT ""', after: 'category' },
    { name: 'title', def: 'VARCHAR(191) NOT NULL', after: 'categoryTitle' },
    { name: 'slug', def: 'VARCHAR(191) NOT NULL', after: 'title' },
    { name: 'subtitle', def: 'VARCHAR(191) NULL DEFAULT ""', after: 'slug' },
    { name: 'shortDesc', def: 'TEXT NULL', after: 'subtitle' },
    { name: 'heroImage', def: 'VARCHAR(191) NULL DEFAULT ""', after: 'shortDesc' },
    { name: 'overviewTitle', def: 'VARCHAR(191) NULL DEFAULT ""', after: 'heroImage' },
    { name: 'overviewDesc', def: 'TEXT NULL', after: 'overviewTitle' },
    { name: 'overviewImage', def: 'VARCHAR(191) NULL DEFAULT ""', after: 'overviewDesc' },
    { name: 'overviewBullets', def: 'LONGTEXT NULL', after: 'overviewImage' },
    { name: 'features', def: 'LONGTEXT NULL', after: 'overviewBullets' },
    { name: 'optionsBadge', def: 'VARCHAR(191) NULL DEFAULT ""', after: 'features' },
    { name: 'optionsTitle', def: 'VARCHAR(191) NULL DEFAULT ""', after: 'optionsBadge' },
    { name: 'options', def: 'LONGTEXT NULL', after: 'optionsTitle' },
    { name: 'documentGroups', def: 'LONGTEXT NULL', after: 'options' },
    { name: 'advisoryNote', def: 'TEXT NULL', after: 'documentGroups' },
    { name: 'eligibilityDesc', def: 'TEXT NULL', after: 'advisoryNote' },
    { name: 'feesDesc', def: 'TEXT NULL', after: 'eligibilityDesc' },
    { name: 'faqs', def: 'LONGTEXT NULL', after: 'feesDesc' },
    { name: 'order', def: 'INT NOT NULL DEFAULT 0', after: 'faqs' },
    { name: 'createdAt', def: 'DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)', after: 'order' },
    { name: 'updatedAt', def: 'DATETIME(3) NOT NULL', after: 'createdAt' },
  ];

  for (const col of columnOrder) {
    const sql = `ALTER TABLE \`Service\` MODIFY COLUMN \`${col.name}\` ${col.def} AFTER \`${col.after}\``;
    await prisma.$executeRawUnsafe(sql);
    console.log(`Placed: ${col.name} -> after ${col.after}`);
  }

  const result = await prisma.$queryRawUnsafe(
    "SELECT ORDINAL_POSITION, COLUMN_NAME, DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = 'globon_db' AND TABLE_NAME = 'Service' ORDER BY ORDINAL_POSITION"
  );
  console.log('\n--- FINAL ORDERED HEADINGS IN MYSQL (globon_db.Service) ---');
  console.table(result);

  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
