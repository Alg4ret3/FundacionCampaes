/**
 * ==========================================================================
 * UTILIDADES RESPONSIVE - responsive.ts
 * ==========================================================================
 * 
 * Archivo centralizado para constantes y helpers de responsive design.
 * Organiza los estilos para: Mobile, Tablet y Desktop.
 * 
 * Breakpoints (Mobile First):
 *   - Mobile: 0px - 639px   (xs, sm)
 *   - Tablet: 640px - 1023px (md)
 *   - Desktop: 1024px+      (lg, xl, 2xl)
 */

// ==========================================================================
// BREAKPOINTS
// ==========================================================================
export const BREAKPOINTS = {
  xs: 320,
  sm: 640,   // Mobile landscape / Pequeño tablet
  md: 768,   // Tablet portrait
  lg: 1024,  // Desktop pequeño
  xl: 1280,  // Desktop
  '2xl': 1536, // Desktop grande
} as const;

// ==========================================================================
// VISTAS PRINCIPALES (Responsive Design)
// ==========================================================================
export const SCREEN_SIZES = {
  mobile: { min: 0, max: 639, label: 'Mobile' },
  tablet: { min: 640, max: 1023, label: 'Tablet' },
  desktop: { min: 1024, max: Infinity, label: 'Desktop' },
} as const;

// ==========================================================================
// CLASES TAILWIND RESPONSIVE - PADDING/MARGIN
// ==========================================================================

/**
 * Padding responsivo:
 * - Mobile: px-4 (16px)
 * - Tablet: px-6 (24px) o px-8 (32px)
 * - Desktop: px-12 (48px) o px-16 (64px)
 */
export const RESPONSIVE_PADDING = {
  container: 'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16',
  section: 'px-4 sm:px-6 md:px-8 lg:px-12',
  compact: 'px-3 sm:px-4 md:px-6 lg:px-8',
} as const;

/**
 * Padding vertical responsivo:
 * - Mobile: py-6/8
 * - Tablet: py-12
 * - Desktop: py-16/20
 */
export const RESPONSIVE_PADDING_Y = {
  section: 'py-8 sm:py-12 md:py-16 lg:py-20',
  compact: 'py-6 sm:py-8 md:py-12 lg:py-16',
  small: 'py-4 sm:py-6 md:py-8 lg:py-10',
} as const;

// ==========================================================================
// CLASES TAILWIND RESPONSIVE - GRID
// ==========================================================================

/**
 * Grid responsivo para cards:
 * - Mobile: 1 columna
 * - Tablet: 2 columnas
 * - Desktop: 3 columnas
 */
export const RESPONSIVE_GRID = {
  columns2: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2',
  columns3: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  columns4: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
} as const;

/**
 * Gap responsivo entre items:
 * - Mobile: gap-4 (16px)
 * - Tablet: gap-6 (24px)
 * - Desktop: gap-8 (32px)
 */
export const RESPONSIVE_GAP = {
  normal: 'gap-4 sm:gap-6 md:gap-8 lg:gap-10',
  tight: 'gap-2 sm:gap-3 md:gap-4 lg:gap-6',
  loose: 'gap-6 sm:gap-8 md:gap-10 lg:gap-12',
} as const;

// ==========================================================================
// CLASES TAILWIND RESPONSIVE - FLEXBOX DIRECCIÓN
// ==========================================================================

/**
 * Layout responsivo:
 * - Mobile: columna (flex-col)
 * - Tablet en adelante: fila (md:flex-row)
 */
export const RESPONSIVE_FLEX = {
  colToRow: 'flex flex-col md:flex-row',
  colToRowBetween: 'flex flex-col md:flex-row items-center md:justify-between',
  colToRowCenter: 'flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6',
} as const;

// ==========================================================================
// CLASES TAILWIND RESPONSIVE - TIPOGRAFÍA
// ==========================================================================

/**
 * Tamaño de fuente responsivo:
 * - Heading 1: responsive
 * - Heading 2: responsive
 * - Body: responsive
 */
export const RESPONSIVE_TEXT = {
  heading1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold',
  heading2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold',
  heading3: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold',
  body: 'text-base sm:text-base md:text-lg lg:text-lg',
  small: 'text-sm sm:text-sm md:text-base lg:text-base',
} as const;

/**
 * Line height responsivo:
 */
export const RESPONSIVE_LINE_HEIGHT = {
  tight: 'leading-tight sm:leading-tight md:leading-tight lg:leading-tight',
  normal: 'leading-normal sm:leading-normal md:leading-snug lg:leading-relaxed',
  relaxed: 'leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose',
} as const;

// ==========================================================================
// CLASES TAILWIND RESPONSIVE - DISPLAY
// ==========================================================================

/**
 * Display responsivo:
 * - Mobile: hidden
 * - Tablet/Desktop: visible
 */
export const RESPONSIVE_DISPLAY = {
  mobileOnly: 'block sm:block md:hidden lg:hidden',
  tabletOnly: 'hidden sm:hidden md:block lg:hidden',
  desktopOnly: 'hidden sm:hidden md:hidden lg:block',
  hideOnMobile: 'hidden md:block',
  hideOnDesktop: 'block md:hidden',
} as const;

// ==========================================================================
// CLASES TAILWIND RESPONSIVE - ANCHO/ALTO
// ==========================================================================

/**
 * Ancho responsivo:
 */
export const RESPONSIVE_WIDTH = {
  full: 'w-full',
  container: 'w-full max-w-6xl mx-auto',
  containerLarge: 'w-full max-w-7xl mx-auto',
  containerSmall: 'w-full max-w-4xl mx-auto',
} as const;

// ==========================================================================
// COMBINACIONES COMUNES
// ==========================================================================

/**
 * Clase general para secciones:
 * Combina padding, max-width y margen automático
 */
export const SECTION_CONTAINER = `
  w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
  max-w-7xl
`;

/**
 * Clase general para contenedores:
 */
export const CONTAINER_DEFAULT = `
  w-full mx-auto
  ${RESPONSIVE_PADDING.container}
  max-w-6xl
`;

/**
 * Clase para hero sections:
 */
export const HERO_LAYOUT = `
  relative z-10
  max-w-7xl mx-auto
  px-4 sm:px-6 md:px-8 lg:px-12
  py-12 sm:py-16 md:py-24 lg:py-32
  grid grid-cols-1 md:grid-cols-2
  gap-8 md:gap-12 lg:gap-16
  items-center
`;

/**
 * Espaciadores responsive
 */
export const SPACING = {
  xs: 'space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5',
  sm: 'space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8',
  md: 'space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10',
  lg: 'space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16',
} as const;

// ==========================================================================
// HOOKS PARA DETECTAR VIEWPORT (Uso opcional en componentes)
// ==========================================================================

/**
 * Hook para detectar el tamaño actual del viewport
 * Ejemplo de uso:
 * const isMobile = useResponsive('mobile');
 * const isTablet = useResponsive('tablet');
 * const isDesktop = useResponsive('desktop');
 */
export const useResponsiveHook = () => {
  const getViewportSize = () => {
    if (typeof window === 'undefined') return 'desktop';
    
    const width = window.innerWidth;
    
    if (width < BREAKPOINTS.sm) return 'mobile';
    if (width < BREAKPOINTS.lg) return 'tablet';
    return 'desktop';
  };

  return getViewportSize();
};

export default {
  BREAKPOINTS,
  SCREEN_SIZES,
  RESPONSIVE_PADDING,
  RESPONSIVE_PADDING_Y,
  RESPONSIVE_GRID,
  RESPONSIVE_GAP,
  RESPONSIVE_FLEX,
  RESPONSIVE_TEXT,
  RESPONSIVE_DISPLAY,
  RESPONSIVE_WIDTH,
  SECTION_CONTAINER,
  CONTAINER_DEFAULT,
  HERO_LAYOUT,
  SPACING,
};
