import Link from "next/link";
import Heading from "@/components/ui/heading";

const educationData = [];

export default function Education() {
  return (
    <div className="flex flex-col">
      <Heading>education</Heading>
      <ul className="flex flex-col gap-y-6">
        <li>
          <h1>
            msc. in computer science: data science (
            <Link href="https://theses.liacs.nl/pdf/2022-2023-WibisonoArvindeva.pdf">
              <span className="underline">thesis</span>
            </Link>
            )
          </h1>
          <p className="text-sm">
            leiden university,{" "}
            <span className="text-muted-foreground">leiden, nl</span>{" "}
          </p>
          <p className="text-muted-foreground text-sm">2021-2023</p>
        </li>
        <li>
          <h1>bsc. in computer science</h1>
          <p className=" text-sm">
            northeastern university,{" "}
            <span className="text-muted-foreground text-sm">boston, usa</span>
          </p>
          <p className="text-muted-foreground text-sm">2010-2016</p>
        </li>
      </ul>
    </div>
  );
}
