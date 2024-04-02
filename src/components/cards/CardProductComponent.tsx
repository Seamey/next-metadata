"use client"
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { ProductType2 } from "@/types/products";

export default function CardProductComponent({ title, image }: ProductType2) {
  return (
    <Card className="py-4 w-auto">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
