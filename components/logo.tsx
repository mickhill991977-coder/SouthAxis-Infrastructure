import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "", priority = false }: LogoProps) {
  return (
    <Image
      src="/logo.jpg"
      alt="SouthAxis Infrastructure"
      width={1254}
      height={1254}
      priority={priority}
      className={`object-contain ${className}`}
    />
  );
}
