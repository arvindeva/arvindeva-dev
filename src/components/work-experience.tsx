import { Exo } from "next/font/google";
import Link from "next/link";
import Heading from "@/components/ui/heading";

const workExperienceData = [
  {
    id: 1,
    date: "2019 - 2021",
    title: "software engineer - frontend",
    company: {
      name: "warung pintar",
      url: "https://www.linkedin.com/company/warungpintar/",
      location: "jakarta, indonesia",
    },
    description:
      "developed and maintained features for company's super app, interal tools, and landing page.",
  },
  {
    id: 2,
    date: "2018 - 2019",
    title: "frontend engineer",
    company: {
      name: "infonesia",
      url: "https://www.linkedin.com/company/infonesia/",
      location: "jakarta, indonesia",
    },
    description:
      "built a social media web application from start to production with a backend engineer and a UI designer.",
  },
  {
    id: 3,
    date: "2016 - 2018",
    title: "web developer",
    company: {
      name: "semesta farm",
      url: "https://www.facebook.com/Semestafarm/",
      location: "bogor, indonesia",
    },
    description:
      "designed, built, and maintained the company website with a blog and a cms",
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
  },
];

export default function WorkExperience() {
  return (
    <div className="flex flex-col">
      <Heading>work experience</Heading>
      <div className="flex flex-col gap-y-6">
        {workExperienceData.map((exp) => {
          return (
            <div key={exp.id}>
              <h2 className="text-foreground">{exp.date}</h2>
              <h2>
                {exp.title} <span className="text-muted-foreground">at</span>{" "}
                <Link href={exp.company.url} className="underline">
                  {exp.company.name}
                </Link>
              </h2>
              {exp.company.location}
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
