import Link from "next/link";
import Heading from "@/components/ui/heading";

const projectsData = [];

export default function Contact() {
  return (
    <div className="flex flex-col">
      <Heading>contact</Heading>
      <p>
        <span className="text-muted-foreground">feel free to email me at</span>{" "}
        arvindeva@gmail.com
      </p>
    </div>
  );
}
