import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Define el esquema para la colección de artículos del blog
const blog = defineCollection({
  // Uso del loader glob para buscar archivos de contenido en el directorio específico
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    // Definir todos los campos requeridos y opcionales con tipos específicos
    titulo: z.string(),
    descripcion: z.string(),
    extracto: z.string(),
    fecha: z.string(),
    fechaPublicacion: z.coerce.date(),
    imagen: z.string(),
    imagenAlt: z.string(),
    autor: z.string().default('CDA TU REVISION'),
    categoria: z.string().default('TECNOMECANICA'),
    publicado: z.boolean().default(true),
    slug: z.string().optional(),
  })
});

// Exportar las colecciones
export const collections = { blog };
