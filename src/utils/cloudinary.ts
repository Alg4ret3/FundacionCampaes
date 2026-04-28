/**
 * Utilidad para optimizar imágenes mediante Cloudinary.
 * Aplica transformaciones automáticas de formato y calidad.
 */

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dqky6oqrd'; 

export const getCloudinaryUrl = (path: string, options: { width?: number; height?: number; crop?: string } = {}) => {
  // Si la ruta ya es una URL completa, la devolvemos (o podríamos procesarla si es de Cloudinary)
  if (path.startsWith('http')) return path;

  // Limpiar el path de barras iniciales
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Parámetros base: f_auto (formato), q_auto (calidad)
  let transformations = 'f_auto,q_auto';

  if (options.width) transformations += `,w_${options.width}`;
  if (options.height) transformations += `,h_${options.height}`;
  if (options.crop) transformations += `,c_${options.crop}`;

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformations}/${cleanPath}`;
};
