import Image from "next/image";
import * as React from "react";
import { Card, CardContent, CardFooter } from "~/components/ui/card";

export default function ImageCard() {
  return (
    // <Card className="w-[350px] overflow-hidden">
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Image
          src="/profile.jpg"
          alt="Colorful abstract art"
          className="h-[200px] w-full object-cover"
          height={200}
          width={200}
        />
      </CardContent>
      <CardFooter className="flex justify-center">
        <p>Colorful abstract art</p>
      </CardFooter>
    </Card>
  );
}
