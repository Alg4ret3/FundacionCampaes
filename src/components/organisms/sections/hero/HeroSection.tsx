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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-fondo"
    >
      {/* ---- Fondo principal con degradados y luz ambiental ---- */}
      <div className="absolute inset-0 bg-gradient-to-br from-claro/60 via-fondo to-fondo/90"></div>

      {/* ---- Glows decorativos estilo premium ---- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glow superior izquierdo */}
        <div className="absolute -top-56 -left-48 w-[420px] h-[420px] bg-primario/25 rounded-full blur-[120px]" />

        {/* Glow lateral derecho */}

        {/* Luz ambiental inferior */}
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-primario/10 rounded-full blur-[160px]" />
      </div>

      {/* ---- Contenido del Hero (organismo) ---- */}
      <div
        className="
          relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 
          py-24 grid md:grid-cols-2 gap-16 items-center
        "
      >
        {/* Columna izquierda: texto + botones */}
        <div className="space-y-10">
          <HeroTextBlock isVisible={isVisible} />
          <HeroButtons isVisible={isVisible} />
        </div>

        {/* Columna derecha: imagen */}
        <HeroImage isVisible={isVisible} />
      </div>

      {/* ---- Línea decorativa inferior ---- */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primario/40 to-transparent" />
    </section>
  );
};
