import { ModalBase } from "../../atoms/layout/ModalBase";
import { IoClose } from "react-icons/io5"; // Importamos el icono de cerrar por si el ModalBase no lo incluye

interface Stat {
  label: string;
  extraText: string;
}

interface ExtraTextModalProps {
  activeStat: number | null;
  setActiveStat: (index: number | null) => void;
  stats: Stat[];
}

export const ExtraTextModal = ({ activeStat, setActiveStat, stats }: ExtraTextModalProps) => {
  const handleClose = () => setActiveStat(null);
  const modalContent = activeStat !== null ? stats[activeStat] : null;

  // Asumo que ModalBase maneja la lógica de backdrop y el div contenedor principal.
  // Aquí ajustamos el contenido interno.
  return (
    <ModalBase open={activeStat !== null} onClose={handleClose}>
      {modalContent && (
        // CONTENEDOR PRINCIPAL del contenido
        // Le damos un padding más amplio (p-6 o p-8) y un ancho máximo
        <div className="p-6 sm:p-8 w-full max-w-lg md:max-w-xl lg:max-w-2xl bg-white rounded-xl shadow-2xl"> 
          
          {/* Opcional: Si ModalBase no incluye el botón de cerrar, añádelo aquí */}
          {/* <button
            className="absolute top-4 right-4 text-gray-500 hover:text-primario transition"
            onClick={handleClose}
            aria-label="Cerrar modal"
          >
            <IoClose size={24} />
          </button> */}

          {/* Título */}
          {/* Ajusto el color a 'primario' (asumiendo que es el color del título en tu captura) */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primario mb-4 sm:mb-6 leading-tight">
            {modalContent.label}
          </h2>

          {/* Separador visual (Ayuda a romper el espacio vacío) */}
          <div className="w-12 h-1 bg-primario/60 rounded-full mb-6 sm:mb-8" />
          

          {/* Texto principal */}
          {/* Aumento el tamaño de la fuente a 'lg' para que ocupe más espacio vertical */}
          <p className="text-texto/90 text-lg leading-relaxed whitespace-pre-line">
            {modalContent.extraText}
          </p>

        </div>
      )}
    </ModalBase>
  );
};