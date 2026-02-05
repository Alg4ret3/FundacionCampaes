import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { HeroTextBlock } from "../../../molecules/hero/HeroTextBlock";
import { HeroButtons } from "../../../molecules/hero/HeroButton";
import { HeroImage } from "../../../molecules/hero/HeroImage";

export const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24 bg-fondo"
    >
      {/* ---- Fondo principal con degradados y luz ambiental ---- */}
      <div className="absolute inset-0 bg-gradient-to-br from-claro/60 via-fondo to-fondo/90"></div>

      {/* ---- Glows decorativos estilo premium ---- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glow superior izquierdo - responsive */}
        <div className="absolute -top-40 sm:-top-48 md:-top-56 -left-32 sm:-left-40 md:-left-48 w-[300px] sm:w-[350px] md:w-[420px] h-[300px] sm:h-[350px] md:h-[420px] bg-primario/25 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]" />

        {/* Glow lateral derecho */}

        {/* Luz ambiental inferior */}
        <div className="absolute bottom-0 left-1/3 w-[350px] sm:w-[400px] md:w-[500px] h-[350px] sm:h-[400px] md:h-[500px] bg-primario/10 rounded-full blur-[100px] sm:blur-[130px] md:blur-[160px]" />
      </div>

      {/* ---- Contenido del Hero (organismo) ---- */}
      <div
        className="
          relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12
          py-12 sm:py-16 md:py-20 lg:py-32
          grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20
          items-center
        "
      >
        {/* Columna izquierda: texto + botones */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 order-2 lg:order-1 w-full">
          <HeroTextBlock isVisible={isVisible} />
          <HeroButtons isVisible={isVisible} />
        </div>

        {/* Columna derecha: imagen - visible en todas las vistas */}
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-none order-1 lg:order-2 mx-auto">
          <HeroImage isVisible={isVisible} />
        </div>
      </div>

      {/* ---- Línea decorativa inferior ---- */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primario/40 to-transparent" />
    </section>
  );
};
