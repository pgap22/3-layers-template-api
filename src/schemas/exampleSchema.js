import z from "zod"

const exampleSchema = z.object({
    nombre: z
        .string({required_error: 'El nombre debe ser un string'})
        .nonempty('El nombre no debe estar vacio'),
    numero: z
        .number({required_error: 'el numero debe ser tipo Number'})
        .nonnegative('Debe ser mayor a cero')
})

const exampleUpdateSchema = z.object({
    nombre: z
        .string({required_error: 'El nombre debe ser un string'})
        .nonempty('El nombre no debe estar vacio')
        .optional(),
    numero: z
        .number({required_error: 'el numero debe ser tipo Number'})
        .nonnegative('Debe ser mayor a cero')
        .optional()
})

export {exampleSchema, exampleUpdateSchema}