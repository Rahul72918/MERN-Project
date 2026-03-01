import "dotenv/config";
import pkg from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { neonConfig } from "@neondatabase/serverless";
import ws from "ws";

const { PrismaClient } = pkg;

neonConfig.webSocketConstructor = ws;
neonConfig.poolQueryViaFetch = true;

const adapter = new PrismaNeon({
    connectionString: process.env.DATABASE_URL,
});

const globalForPrisma = global;

const prisma =
    globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}

export default prisma;