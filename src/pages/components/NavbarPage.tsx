import { Navbar } from "@/components/navbar";
import { Button } from "@/components";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const NavbarPage = () => {
  const defaultNavbar = `import { Navbar } from "@/components/navbar";
import { Button } from "@/components";

<Navbar>
  <h1>Logo</h1>

  <div className="flex gap-5">
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Customer</a>
  </div>

  <div>
    <Button hoverAnimation="none">
      Profile
    </Button>
  </div>
</Navbar>`;

  const darkNavbar = `import { Navbar } from "@/components/navbar";
import { Button } from "@/components";

<Navbar variant="dark">
  <h1>Logo</h1>

  <div className="flex gap-5">
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Customer</a>
  </div>

  <div>
    <Button hoverAnimation="none">
      Profile
    </Button>
  </div>
</Navbar>`;

  const primaryNavbar = `import { Navbar } from "@/components/navbar";
import { Button } from "@/components";

<Navbar variant="primary">
  <h1>Logo</h1>

  <div className="flex gap-5">
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Customer</a>
  </div>

  <div>
    <Button hoverAnimation="none">
      Profile
    </Button>
  </div>
</Navbar>`;

  const glassNavbar = `import { Navbar } from "@/components/navbar";
import { Button } from "@/components";

<Navbar variant="glass">
  <h1>Logo</h1>

  <div className="flex gap-5">
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Customer</a>
  </div>

  <div>
    <Button hoverAnimation="none">
      Profile
    </Button>
  </div>
</Navbar>`;

  const propsData = [
    {
      prop: "variant",
      type: `"dark" | "light" | "primary" | "glass"`,
      default: `"light"`,
      description: "Defines the visual style of the navbar.",
    },
    {
      prop: "size",
      type: `"default" | "sm" | "lg" | "xl"`,
      default: `"default"`,
      description: "Controls the height of the navbar.",
    },
    {
      prop: "animation",
      type: `"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"`,
      default: `"fadeIn"`,
      description:
        "Defines the entrance animation applied when the navbar mounts.",
    },
    {
      prop: "hoverAnimation",
      type: "keyof typeof hoverAnimations",
      default: `"none"`,
      description: "Defines the GSAP hover animation applied to the navbar.",
    },
    {
      prop: "asChild",
      type: "boolean",
      default: "false",
      description:
        "Allows the navbar to render as another HTML element using Radix Slot.",
    },
    {
      prop: "className",
      type: "string",
      default: "-",
      description: "Additional custom classes for styling the navbar.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Navbar</h1>

        <p className="text-xl text-gray-600">
          The Navbar component provides a navigation bar with different
          variants, sizes and animations.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>

        <div className="flex flex-col gap-10">
          <ComponentDemo code={defaultNavbar}>
            <Navbar>
              <h1>Logo</h1>

              <div className="flex gap-5">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Customer</a>
              </div>

              <div>
                <Button hoverAnimation="none">Profile</Button>
              </div>
            </Navbar>
          </ComponentDemo>

          <ComponentDemo code={darkNavbar}>
            <Navbar variant="dark">
              <h1>Logo</h1>

              <div className="flex gap-5">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Customer</a>
              </div>

              <div>
                <Button hoverAnimation="none">Profile</Button>
              </div>
            </Navbar>
          </ComponentDemo>

          <ComponentDemo code={primaryNavbar}>
            <Navbar variant="primary">
              <h1>Logo</h1>

              <div className="flex gap-5">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Customer</a>
              </div>

              <div>
                <Button hoverAnimation="none">Profile</Button>
              </div>
            </Navbar>
          </ComponentDemo>

          <ComponentDemo code={glassNavbar}>
            <Navbar variant="glass">
              <h1>Logo</h1>

              <div className="flex gap-5">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Customer</a>
              </div>

              <div>
                <Button hoverAnimation="none">Profile</Button>
              </div>
            </Navbar>
          </ComponentDemo>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>

        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default NavbarPage;