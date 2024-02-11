import Link from "next/link";
import Heading from "@/components/ui/heading";

const projectsData = [];

export default function Projects() {
  return (
    <div className="flex flex-col">
      <Heading>projects</Heading>
      <ul className="flex flex-col gap-y-6">
        <li>
          <Link href="https://evento-v0.vercel.app/">
            <h1 className="underline">evento</h1>
          </Link>
          <p className="text-muted-foreground text-sm">
            mvp for a music event scrapbook/social media app.{" "}
            <Link href="https://github.com/arvindeva/evento-web">
              <span className="underline text-primary-foreground">code</span>
            </Link>
          </p>
        </li>
        <li>
          <Link href="https://titik-tiga.vercel.app/">
            <h1 className="underline">titik tiga hotel</h1>
          </Link>
          <p className="text-muted-foreground text-sm">
            hotel rooms reservation website.{" "}
            <Link href="https://github.com/arvindeva/titik-tiga">
              <span className="underline text-primary-foreground">code</span>
            </Link>
          </p>
        </li>
        <li>
          <Link href="https://mgpindonesia.org/">
            <h1 className="underline">yayasan mgp indonesia</h1>
          </Link>
          <p className="text-muted-foreground text-sm">
            landing page for a non-profit organization. source code private.
          </p>
        </li>
        <li>
          <Link href="https://bmrlabel.com/">
            <h1 className="underline">bmr labels</h1>
          </Link>
          <p className="text-muted-foreground">
            landing page for a labelling and packaging company. source code
            private.
          </p>
        </li>
      </ul>
    </div>
  );
}
