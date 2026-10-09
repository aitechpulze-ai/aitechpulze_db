// Usage (Node 20+):
//   ADMIN_EMAIL=you@aitechpulze.com ADMIN_NAME="Niranjan P" ADMIN_PASSWORD='Temp#Pass123' \
//   node --env-file=.env.local scripts/create-admin.js
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

async function main() {
  const { ADMIN_EMAIL, ADMIN_NAME, ADMIN_PASSWORD } = process.env;
  if (!ADMIN_EMAIL || !ADMIN_NAME || !ADMIN_PASSWORD) {
    console.error("Set ADMIN_EMAIL, ADMIN_NAME and ADMIN_PASSWORD.");
    process.exit(1);
  }
  if (ADMIN_PASSWORD.length < 8) {
    console.error("ADMIN_PASSWORD must be at least 8 characters.");
    process.exit(1);
  }

  const prisma = new PrismaClient();
  try {
    const email = ADMIN_EMAIL.toLowerCase();
    if (await prisma.user.findUnique({ where: { email } })) {
      console.error("A user with this email already exists.");
      process.exit(1);
    }
    await prisma.user.create({
      data: {
        name: ADMIN_NAME,
        email,
        passwordHash: await bcrypt.hash(ADMIN_PASSWORD, 12),
        role: "ADMIN",
        mustChangePassword: true,
      },
    });
    console.log(`Admin created: ${email} (you must change the password on first login)`);
  } finally {
    await prisma.$disconnect();
  }
}

main();
