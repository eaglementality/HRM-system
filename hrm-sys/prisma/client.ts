import { PrismaClient } from "@prisma/client";

declare global {
    namespace NodeJS{
        interface Global {}
    }
}
// add prisma to the NodeJS global type
interface CustomerNodeJsGlobal extends NodeJS.Global {
prisma:PrismaClient
}

//prevent multiple instances of Prisma Client in development
declare const global: CustomerNodeJsGlobal

const prisma = global.prisma || new PrismaClient()

if(process.env.NODE_ENV === "development") global.prisma = prisma
export default prisma