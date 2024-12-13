import Image from "next/image";
import * as React from "react";
import { Card, CardContent, CardFooter } from "~/components/ui/card";

interface ImageCardProps {
  src: string;
  alt: string;
  footerLabel: string;
}

export default function ImageCard({ src, alt, footerLabel }: ImageCardProps) {
  return (
    <Card className="overflow-hidden w-64">
      <CardContent className="p-0 h-64 relative">
        <Image
          src={src}
          alt={alt}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
        />
      </CardContent>

      <CardFooter className="flex justify-center p-5">
        <p className="text-sm text-center">{footerLabel}</p>
      </CardFooter>
    </Card>
  );
}
