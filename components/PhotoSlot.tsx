import Image from "next/image";
import styles from "./PhotoSlot.module.css";

type PhotoSlotProps = {
  src: string | null;
  alt: string;
  aspect: "portrait" | "landscape";
};

export function PhotoSlot({ src, alt, aspect }: PhotoSlotProps) {
  const className = `${styles.slot} ${styles[aspect]}`;

  if (!src) {
    return (
      <div className={className} role="img" aria-label={`${alt}. Photo coming.`}>
        <p className={styles.label}>Photo coming</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        fill
        className={styles.image}
        sizes={
          aspect === "portrait"
            ? "(max-width: 800px) 100vw, 36rem"
            : "(max-width: 800px) 100vw, 42rem"
        }
      />
    </div>
  );
}
