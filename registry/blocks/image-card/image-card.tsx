import Meta from "antd/es/card/Meta";
import * as React from "react";

import Button from "@/registry/ui/button";
import Card from "@/registry/ui/card";

export function ImageCard({
  title,
  description,
  buttonText,
  buttonLink,
  image,
  alt,
}: {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  alt: string;
}) {
  return (
    <Card
      hoverable
      style={{ width: 400 }}
      cover={<img alt={alt} src={image} />}
    >
      <Meta title={title} description={description} />
      <Button style={{ marginTop: 20 }} href={buttonLink}>
        {buttonText}
      </Button>
    </Card>
  );
}
