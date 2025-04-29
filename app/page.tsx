import * as React from "react";

import { OpenInV0Button } from "@/components/open-in-v0-button";
import Breadcrumb from "@/registry/blocks/breadcrumb/breadcrumb";
import Button from "@/registry/blocks/button/button";
import Card from "@/registry/blocks/card/card";
import { ImageCard } from "@/registry/blocks/image-card/image-card";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-8">
      <header className="flex flex-col gap-1">
        <h1 className="font-bold text-3xl tracking-tight">
          Custom Ant Design Registry
        </h1>
        <p className="text-muted-foreground">
          A custom UI registry for distributing code using a{" "}
          <a href="https://ui.shadcn.com/docs/registry" className="underline">
            Shadcn/ui Registry
          </a>
          {" + "}
          <a href="https://ant.design" className="underline">
            Ant Design
          </a>
          .
          <br />
          <br />
          Using a registry like this allows for individual components (from any
          design system) to be opened and used while prototyping in v0.
        </p>
      </header>

      <main className="flex flex-1 flex-col gap-8">
        <div className="relative flex min-h-[150px] flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-muted-foreground text-sm sm:pl-3">Button</h2>
            <OpenInV0Button name="button" className="w-fit" />
          </div>
          <div className="relative flex min-h-[100px] flex-wrap items-center justify-center gap-2">
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
          </div>
        </div>

        <div className="relative flex min-h-[150px] flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-muted-foreground text-sm sm:pl-3">
              Breadcrumb
            </h2>
            <OpenInV0Button name="breadcrumb" className="w-fit" />
          </div>
          <div className="relative flex min-h-[100px] items-center justify-center">
            <Breadcrumb
              items={[
                { title: "Dashboard", href: "#dashboard" },
                { title: "Components", href: "#components" },
                { title: "Breadcrumb", href: "#breadcrumb" },
              ]}
            />
          </div>
        </div>

        <div className="relative flex min-h-[150px] flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-muted-foreground text-sm sm:pl-3">Card</h2>
            <OpenInV0Button name="card" className="w-fit" />
          </div>
          <div className="relative flex min-h-[100px] items-center justify-center">
            <Card
              title="Card Title"
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              This is a nice, very long card description for a card component.
            </Card>
          </div>
        </div>

        <div className="relative flex min-h-[150px] flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-muted-foreground text-sm sm:pl-3">
              Image Card
            </h2>
            <OpenInV0Button name="image-card" className="w-fit" />
          </div>
          <div className="relative flex min-h-[100px] items-center justify-center">
            <ImageCard
              title="Sky"
              description="The sky is very blue"
              buttonText="Learn More"
              buttonLink="#button"
              image="/sky.jpg"
              alt="Sky"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
