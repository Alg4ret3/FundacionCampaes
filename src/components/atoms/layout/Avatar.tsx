// atoms/Avatar.tsx
interface AvatarProps {
  src: string;
  alt: string;
}
export const Avatar = ({ src, alt }: AvatarProps) => (
  <img src={src} alt={alt} className="w-12 h-12 rounded-full object-cover" />
);
