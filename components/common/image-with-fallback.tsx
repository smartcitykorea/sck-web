"use client";

import { useState } from "react";
import Image from "next/image";

export const IMAGE_FALLBACK_SRC = "/images/placeholder-default.svg";

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
  aspectRatio?: string;
  fillParent?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function ImageWithFallback({
  src,
  alt,
  aspectRatio = "4/3",
  fillParent = false,
  className,
  sizes = "100vw",
  priority = false,
}: ImageWithFallbackProps) {
  // src가 언마운트 없이 바뀌는 자리(예: 캐러셀)에서는 호출부에서 key={src}를 넘겨
  // 이 컴포넌트를 다시 마운트시켜야 fallback 상태가 새 src 기준으로 초기화된다.
  const [imgSrc, setImgSrc] = useState(() =>
    src && src.length > 0 ? src : IMAGE_FALLBACK_SRC
  );

  const wrapperStyle = fillParent
    ? { position: "absolute" as const, inset: 0 }
    : { position: "relative" as const, width: "100%", aspectRatio, overflow: "hidden" };

  return (
    <div className={className} style={wrapperStyle}>
      <Image
        src={imgSrc}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectFit: "cover" }}
        onError={() => setImgSrc(IMAGE_FALLBACK_SRC)}
      />
    </div>
  );
}
