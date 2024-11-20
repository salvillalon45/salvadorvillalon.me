import Image from "next/image";
import * as React from "react";
import { Card, CardContent, CardFooter } from "~/components/ui/card";

interface ImageCardProps {
  src: string;
  alt: string;
  footerLabel: string;
}

export default function ImageCard({src, alt, footerLabel} : ImageCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Image
          src={src}
          alt={alt}
          className="h-[200px] w-full object-cover"
          height={200}
          width={200}
        />
      </CardContent>

      <CardFooter className="flex justify-center">
        <p>{footerLabel}</p>
      </CardFooter>
    </Card>
  );
}
