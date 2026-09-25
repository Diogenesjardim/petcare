import Image from "next/image";
import { assetPath } from "@/lib/asset-path";

interface PhotoGalleryProps {
  photos: { src: string; alt: string }[];
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {photos.slice(0, 6).map((photo, index) => (
        <div
          key={photo.src + index}
          className="relative aspect-square overflow-hidden rounded-xl bg-forest-100"
        >
          <Image
            src={assetPath(photo.src)}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 15vw, (min-width: 640px) 22vw, 45vw"
            className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.05]"
          />
        </div>
      ))}
    </div>
  );
}
