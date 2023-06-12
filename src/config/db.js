import { PrismaClient } from "@prisma/client";

//Esta onda hace todas las querys automaticamente con metodos y funciones :)
const prisma = new PrismaClient();

export { prisma }