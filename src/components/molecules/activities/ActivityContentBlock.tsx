import { CategoryTag } from "../../atoms/layout/CategoryTag";

export const ActivityContentBlock = ({
  category,
  title,
  description,
}: {
  category: string;
  title: string;
  description: string;
}) => (
  <div className="p-6">
    <CategoryTag text={category} />

    <h3
      className="
        text-xl 
        font-bold 
        text-primario 
        mb-3 
        transition-colors 
        duration-300 
        group-hover:text-secundario
      "
    >
      {title}
    </h3>

    <p className="text-text/80 leading-relaxed">
      {description}
    </p>
  </div>
);
