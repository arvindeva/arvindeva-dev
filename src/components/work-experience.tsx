import Link from "next/link";
import Heading from "@/components/ui/heading";
import { Badge } from "@/components/ui/badge";

const workExperienceData = [
  {
    id: 1,
    date: "may 2019 - jan 2021",
    title: "frontend engineer",
    company: {
      name: "warung pintar",
      url: "https://www.linkedin.com/company/warungpintar/",
      location: "jakarta, indonesia",
    },
    description:
      "developed and maintained features for company's super app, internal tools, and landing page.",
    stack: [
      "react",
      "react native",
      "typescript",
      "graphql",
      "nextjs",
      "tailwind",
      "docker",
    ],
  },
  {
    id: 2,
    date: "dec 2018 - may 2019",
    title: "frontend engineer",
    company: {
      name: "infonesia",
      url: "https://www.linkedin.com/company/infonesia/",
      location: "jakarta, indonesia",
    },
    description:
      "built a social media web application from start to production with a backend engineer and a UI designer.",
    stack: ["react", "javascript", "graphql", "nextjs", "styled component"],
  },
  {
    id: 3,
    date: "oct 2016 - sep 2018",
    title: "web developer",
    company: {
      name: "semesta farm",
      url: "https://www.facebook.com/Semestafarm/",
      location: "bogor, indonesia",
    },
    description:
      "designed, built, and maintained the company website with a blog and a cms",
    stack: [
      "html",
      "css",
      "javascript",
      "wordpress",
      "yoast seo",
      "wpforms",
      "bootstrap",
    ],
  },
  {
    id: 4,
    date: "jul 2014 - dec 2014",
    title: "qa engineer",
    company: {
      name: "zipcar",
      url: "https://www.linkedin.com/company/zipcar/",
      location: "boston, ma, usa",
    },
    description:
      "developed test plans and test automation for a full-stack carsharing application and integrated testing modules for both front-end and backend applications to existing CI/CD pipelines",
    stack: [
      "javascript",
      "backbone.js",
      "ruby",
      "rails",
      "rspec",
      "selenium",
      "jasmine",
      "jenkins",
    ],
  },
];

export default function WorkExperience() {
  return (
    <div className="flex flex-col">
      <Heading>work experience</Heading>
      <div className="flex flex-col gap-y-12">
        {workExperienceData.map((exp) => {
          return (
            <div key={exp.id}>
              <div className="flex flex-row justify-between">
                <h2>{exp.title}</h2>
                <h2 className="text-foreground text-base">{exp.date}</h2>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <h2 className="leading-none">
                  <span className="text-muted-foreground text-sm">at </span>
                  <Link href={exp.company.url} className="underline text-sm">
                    {exp.company.name}
                  </Link>{" "}
                </h2>
                <p className="text-muted-foreground text-sm">
                  {exp.company.location}
                </p>
              </div>

              <p className="text-muted-foreground mb-2 text-sm">
                {exp.description}
              </p>
              <div className="flex flex-row gap-x-2 flex-wrap gap-y-2">
                {exp.stack.map((tech) => {
                  return (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
