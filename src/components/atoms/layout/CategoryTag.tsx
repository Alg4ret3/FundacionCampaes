export const CategoryTag = ({ text }: { text: string }) => (
  <div
    className="
      inline-block
      bg-primario/20
      text-primario
      border border-primario/40
      px-3 
      py-1 
      rounded-full 
      text-sm 
      font-semibold 
      mb-3 
      capitalize
      tracking-wide
    "
  >
    {text}
  </div>
);
