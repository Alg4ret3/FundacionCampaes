import { ModalBase } from "../../atoms/layout/ModalBase";

export const ActivityDetailsModal = ({ activity, onClose }) => (
  <ModalBase open={!!activity} onClose={onClose}>
    <div className="pt-8 sm:pt-12 pb-8 px-4 sm:px-6">
      {activity.image && (
        <img
          src={activity.image}
          className="
    w-full 
    h-52 sm:h-64 md:h-72 
    rounded-2xl 
    object-cover 
    mb-6 
    shadow-lg 
    transition-all duration-300
  "
        />
      )}

      <span className="px-4 py-1 bg-primario/10 text-primario rounded-full text-xs font-semibold mb-4 inline-block uppercase tracking-wide">
        {activity.category}
      </span>

      <h2 className="text-3xl font-extrabold text-primario mb-4">
        {activity.title}
      </h2>

      <p className="text-secundario/80 mb-4">
        {new Date(activity.date).toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <div className="w-20 h-1 bg-acento/40 rounded-full mb-6"></div>

      {activity.extraText && (
        <p className="text-texto/80 leading-relaxed mt-4 whitespace-pre-line">
          {activity.extraText}
        </p>
      )}
    </div>
  </ModalBase>
);
