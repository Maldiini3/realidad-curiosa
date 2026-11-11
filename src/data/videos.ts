/**
 * Registro de Publicaciones de Video Verificadas — Realidad Curiosa
 * Fase 3: Estructura Editorial, Contenido y SEO
 *
 * Canales oficiales verificados:
 * - YouTube: https://www.youtube.com/@realidadcuriosaa
 * - TikTok: https://www.tiktok.com/@realidad.curiosa
 * - Facebook: https://www.facebook.com/people/Realidad-Curiosa/61570674806317/
 *
 * REGLAS DE INTEGRIDAD EDITORIAL:
 * - No inventar enlaces individuales, miniaturas ni métricas ficticias.
 * - Cada publicación registrada debe contar con su URL individual auténtica.
 * - Si no es posible verificar una publicación, permanece fuera del listado activo.
 */

export interface VideoPublication {
  id: string;
  title: string;
  platform: 'YouTube Shorts' | 'TikTok' | 'Facebook Reels';
  publicationUrl: string; // URL individual y directa de la publicación
  thumbnailUrl?: string;  // Ruta o URL de la miniatura auténtica
  category: 'universo-y-ciencia' | 'naturaleza-y-vida' | 'historia-y-enigmas' | 'fenomenos-asombrosos' | 'curiosidades';
  datePublished?: string; // Fecha de publicación verificable (formato YYYY-MM-DD)
  durationSeconds?: number;
}

/**
 * Array de publicaciones de video verificadas.
 * Se inicializa vacío hasta que el propietario incorpore las URLs y miniaturas
 * individuales de cada publicación auténtica existente en las redes.
 */
export const verifiedVideos: VideoPublication[] = [];

/**
 * Función de utilidad para obtener videos por categoría.
 */
export function getVideosByCategory(categorySlug: string): VideoPublication[] {
  return verifiedVideos.filter(v => v.category === categorySlug);
}
