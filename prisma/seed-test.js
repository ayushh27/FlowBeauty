const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log("Minimal seed test starting...");
    const product = await prisma.product.upsert({
        where: { id: 'test-product' },
        update: {},
        create: {
            id: 'test-product',
            name: "Test Product",
            description: "Test description",
            price: 10,
            category: "Test",
            brand: "Test",
            stock: 10,
        }
    });
    console.log("Seeded test product:", product.name);
}

main().catch(console.error).finally(() => prisma.$disconnect());
