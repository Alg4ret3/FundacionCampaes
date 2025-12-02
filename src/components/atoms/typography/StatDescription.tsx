interface StatDescriptionProps {
  description: string;
}

export const StatDescription = ({ description }: StatDescriptionProps) => (
  <p className="text-fondo/70 text-sm">{description}</p>
);

/*
  Componente StatDescription:
  - Muestra una breve descripción debajo de un dato o estadística.
  - Usa un estilo sutil (`text-fondo/70`) y tamaño pequeño para no competir visualmente
    con el valor principal.
  - Ideal para acompañar métricas, KPIs o textos secundarios.
*/
