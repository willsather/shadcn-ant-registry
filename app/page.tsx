import * as React from "react"

import { OpenInV0Button } from "@/components/open-in-v0-button"
import Button from "@/registry/blocks/button/button";
import Breadcrumb from "@/registry/blocks/breadcrumb/breadcrumb";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Ant Design Registry</h1>
        <p className="text-muted-foreground">
          A custom UI registry for distributing code using a{" "}
          <a href="https://ui.shadcn.com/docs/registry" className="underline">Shadcn/ui Registry</a>
          {" + "}
          <a href="https://ant.design" className="underline">Ant Design</a>.

          <br />
          <br />

          Using a registry like this allows for individual components (from any design system) to be opened and used
          while prototyping in v0.
        </p>
      </header>

      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Button
            </h2>
            <OpenInV0Button name="hello-world" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] gap-2 relative">
            <Button variant="solid">Solid Button</Button>
            <Button variant="filled">Filled Button</Button>
            <Button variant="outlined">Outlined Button</Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[150px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Breadcrumb
            </h2>
            <OpenInV0Button name="hello-world" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[100px] relative">
            <Breadcrumb items={[{ title: 'Dashboard' }, { title: 'Components' }, { title: 'Breadcrumb' }]} />
          </div>
        </div>

      </main>
    </div>
  )
}
