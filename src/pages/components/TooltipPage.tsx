import { Settings, Trash2, CircleHelp, Info, Pencil } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/Tooltip";

import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const TooltipPage = () => {
  const settingsCode = `import { Settings } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/Tooltip";

<Tooltip>
  <TooltipTrigger asChild>
    <button aria-label="Settings">
      <Settings size={20} />
    </button>
  </TooltipTrigger>

  <TooltipContent>
    Settings
  </TooltipContent>
</Tooltip>`;

  const deleteCode = `import { Trash2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/Tooltip";

<Tooltip>
  <TooltipTrigger asChild>
    <button aria-label="Delete">
      <Trash2 size={20} />
    </button>
  </TooltipTrigger>

  <TooltipContent>
    Delete
  </TooltipContent>
</Tooltip>`;

  const helpCode = `import { CircleHelp } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/Tooltip";

<Tooltip>
  <TooltipTrigger asChild>
    <button aria-label="Help">
      <CircleHelp size={20} />
    </button>
  </TooltipTrigger>

  <TooltipContent>
    Help
  </TooltipContent>
</Tooltip>`;

  const infoCode = `import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/Tooltip";

<Tooltip>
  <TooltipTrigger asChild>
    <button aria-label="Information">
      <Info size={20} />
    </button>
  </TooltipTrigger>

  <TooltipContent>
    More information
  </TooltipContent>
</Tooltip>`;

  const editCode = `import { Pencil } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/Tooltip";

<Tooltip>
  <TooltipTrigger asChild>
    <button aria-label="Edit">
      <Pencil size={20} />
    </button>
  </TooltipTrigger>

  <TooltipContent>
    Edit
  </TooltipContent>
</Tooltip>`;

  const topCode = `import { Settings } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/Tooltip";

<Tooltip>
  <TooltipTrigger asChild>
    <button aria-label="Settings">
      <Settings size={20} />
    </button>
  </TooltipTrigger>

  <TooltipContent side="top">
    Settings
  </TooltipContent>
</Tooltip>`;

  const rightCode = `import { Settings } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/Tooltip";

<Tooltip>
  <TooltipTrigger asChild>
    <button aria-label="Settings">
      <Settings size={20} />
    </button>
  </TooltipTrigger>

  <TooltipContent side="right">
    Settings
  </TooltipContent>
</Tooltip>`;

  const bottomCode = `import { Settings } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/Tooltip";

<Tooltip>
  <TooltipTrigger asChild>
    <button aria-label="Settings">
      <Settings size={20} />
    </button>
  </TooltipTrigger>

  <TooltipContent side="bottom">
    Settings
  </TooltipContent>
</Tooltip>`;

  const leftCode = `import { Settings } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/Tooltip";

<Tooltip>
  <TooltipTrigger asChild>
    <button aria-label="Settings">
      <Settings size={20} />
    </button>
  </TooltipTrigger>

  <TooltipContent side="left">
    Settings
  </TooltipContent>
</Tooltip>`;

  const customCode = `import { Settings } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/Tooltip";

<Tooltip>
  <TooltipTrigger asChild>
    <button aria-label="Settings">
      <Settings size={20} />
    </button>
  </TooltipTrigger>

  <TooltipContent
    side="top"
    sideOffset={10}
    className="bg-indigo-600"
  >
    Open settings
  </TooltipContent>
</Tooltip>`;

  const propsData = [
    {
      prop: "side",
      type: `"top" | "right" | "bottom" | "left"`,
      default: `"top"`,
      description: "Controls the side where the tooltip appears.",
    },
    {
      prop: "sideOffset",
      type: "number",
      default: "6",
      description: "Controls the distance between the trigger and tooltip.",
    },
    {
      prop: "align",
      type: `"start" | "center" | "end"`,
      default: `"center"`,
      description: "Controls the alignment of the tooltip.",
    },
    {
      prop: "className",
      type: "string",
      default: "-",
      description: "Additional classes for custom tooltip styling.",
    },
    {
      prop: "children",
      type: "React.ReactNode",
      default: "-",
      description: "Content displayed inside the tooltip.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>

        <p className="text-xl text-gray-600">
          Displays helpful information when hovering over or focusing on an
          element.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Usage</h2>

        <ComponentDemo code={settingsCode}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                aria-label="Settings"
                className="flex items-center justify-center"
              >
                <Settings size={20} />
              </button>
            </TooltipTrigger>

            <TooltipContent>Settings</TooltipContent>
          </Tooltip>
        </ComponentDemo>

        <ComponentDemo code={deleteCode}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                aria-label="Delete"
                className="flex items-center justify-center"
              >
                <Trash2 size={20} />
              </button>
            </TooltipTrigger>

            <TooltipContent>Delete</TooltipContent>
          </Tooltip>
        </ComponentDemo>

        <ComponentDemo code={helpCode}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                aria-label="Help"
                className="flex items-center justify-center"
              >
                <CircleHelp size={20} />
              </button>
            </TooltipTrigger>

            <TooltipContent>Help</TooltipContent>
          </Tooltip>
        </ComponentDemo>

        <ComponentDemo code={infoCode}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                aria-label="Information"
                className="flex items-center justify-center"
              >
                <Info size={20} />
              </button>
            </TooltipTrigger>

            <TooltipContent>More information</TooltipContent>
          </Tooltip>
        </ComponentDemo>

        <ComponentDemo code={editCode}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                aria-label="Edit"
                className="flex items-center justify-center"
              >
                <Pencil size={20} />
              </button>
            </TooltipTrigger>

            <TooltipContent>Edit</TooltipContent>
          </Tooltip>
        </ComponentDemo>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Positions</h2>

        <div className="grid grid-cols-2 gap-6">
          <ComponentDemo code={topCode}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  aria-label="Settings"
                  className="flex items-center justify-center"
                >
                  <Settings size={20} />
                </button>
              </TooltipTrigger>

              <TooltipContent side="top">Settings</TooltipContent>
            </Tooltip>
          </ComponentDemo>

          <ComponentDemo code={rightCode}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  aria-label="Settings"
                  className="flex items-center justify-center"
                >
                  <Settings size={20} />
                </button>
              </TooltipTrigger>

              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </ComponentDemo>

          <ComponentDemo code={bottomCode}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  aria-label="Settings"
                  className="flex items-center justify-center"
                >
                  <Settings size={20} />
                </button>
              </TooltipTrigger>

              <TooltipContent side="bottom">Settings</TooltipContent>
            </Tooltip>
          </ComponentDemo>

          <ComponentDemo code={leftCode}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  aria-label="Settings"
                  className="flex items-center justify-center"
                >
                  <Settings size={20} />
                </button>
              </TooltipTrigger>

              <TooltipContent side="left">Settings</TooltipContent>
            </Tooltip>
          </ComponentDemo>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Custom Tooltip</h2>

        <ComponentDemo code={customCode}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                aria-label="Settings"
                className="flex items-center justify-center"
              >
                <Settings size={20} />
              </button>
            </TooltipTrigger>

            <TooltipContent
              side="top"
              sideOffset={10}
              className="bg-indigo-600"
            >
              Open settings
            </TooltipContent>
          </Tooltip>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>

        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default TooltipPage;
