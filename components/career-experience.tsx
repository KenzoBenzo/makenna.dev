import { Badge, Button, Card, DropdownMenu, Flex } from "@radix-ui/themes";
import React, { Dispatch, SetStateAction } from "react";
import {
  CaretDownIcon,
  ChakraUiLogoIcon,
  ChartGptLogoIcon,
  ClickUpLogoIcon,
  DashedCircleIcon,
  HaliteLogoIcon,
  HeronLogoIcon,
  HygraphLogoIcon,
  MeeshkanLogoIcon,
  OwnCoLogoIcon,
  PlainLogoIcon,
  RoopairsLogoIcon,
  TaiaLogoIcon,
  WhopLogoIcon,
  XIcon,
} from "./icons";

export const technicalSkills = [
  { value: "typescript", label: "TypeScript" },
  { value: "react", label: "React" },
  { value: "nextjs", label: "Next.js" },
  { value: "graphql", label: "GraphQL" },
  { value: "framer-motion", label: "Framer Motion" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "open-source", label: "Open Source" },
] as const;
export const designSkills = [
  { value: "product-design", label: "Product Design" },
  { value: "design-systems", label: "Design Systems" },
  { value: "storybook", label: "Storybook" },
  { value: "web-design", label: "Web Design" },
] as const;
export const businessSkills = [
  { value: "product-management", label: "Product management" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
  { value: "customer-support", label: "Customer support" },
  { value: "operations", label: "Operations" },
] as const;

type TechnicalSkillValue = (typeof technicalSkills)[number]["value"];
type DesignSkillValue = (typeof designSkills)[number]["value"];
type BusinessSkillValue = (typeof businessSkills)[number]["value"];

export type Skill = TechnicalSkillValue | DesignSkillValue | BusinessSkillValue;

export interface ExperienceCardProps {
  title: string;
  founder: boolean;
  contract: boolean;
  company: string;
  dateRange: string;
  description: string[];
  brandColor: string;
  logo: React.ReactNode;
  skills: Skill[];
  skillsSelected?: Skill[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  logo,
  title,
  founder,
  contract,
  company,
  dateRange,
  description,
  brandColor,
  skills,
  skillsSelected,
}) => {
  const noSkillsSelected =
    skillsSelected?.length === 0 || skillsSelected === undefined;
  const hasSkillsSelected = skillsSelected?.some((skill) =>
    skills.includes(skill)
  );

  if (!hasSkillsSelected && !noSkillsSelected) return null;

  return (
    <Card
      className={
        !hasSkillsSelected && !noSkillsSelected ? "opacity-40" : undefined
      }
      size='2'
    >
      <div className='flex items-center'>
        <div
          className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg mr-3`}
          style={{ backgroundColor: brandColor }}
        >
          {logo}
        </div>
        <div>
          <div className='flex items-center gap-2'>
            <h3 className='font-semibold'>
              {title} @ {company}
            </h3>
            {founder && (
              <Badge color='gray' variant='surface'>
                founder
              </Badge>
            )}
            {contract && (
              <Badge color='mint' highContrast variant='surface'>
                contract
              </Badge>
            )}
          </div>
          <p className='text-xs text-sage-9'>{dateRange}</p>
        </div>
      </div>
      <div className='ml-[45px]'>
        <ul className="list-['—_'] marker:text-mint-10 mt-2 space-y-3">
          {description.map((desc, index) => (
            <li key={index} className='text-sage-10 text-sm'>
              {desc}
            </li>
          ))}
        </ul>
        {hasSkillsSelected && (
          <div className='mt-3 flex flex-wrap gap-2'>
            {skills
              .filter((skill) => skillsSelected?.includes(skill))
              .map((skill) => (
                <Badge key={skill} size='1' color='gray'>
                  {skill}
                </Badge>
              ))}
          </div>
        )}
      </div>
    </Card>
  );
};

const experiences: ExperienceCardProps[] = [
  {
    company: "Halite.app",
    title: "Design/Product Engineer",
    founder: true,
    contract: false,
    dateRange: "September 2023 - Present",
    description: [
      "The only designer and engineer on the team. I have designed, prototyped, tested and built the app and marketing website.",
      "Made with chakra-ui, saas-ui, typescript, Next.js, graphql",
      "This is a data and charts heavy product, so I dove deep into animations, and display of data, by utilizing react-table, framer-motion, and Chart.js",
    ],
    brandColor: "#44403C",
    logo: <HaliteLogoIcon />,
    skills: [
      "typescript",
      "react",
      "nextjs",
      "graphql",
      "frontend",
      "framer-motion",
      "framer-motion",
      "product-management",
      "web-design",
      "operations",
      "sales",
      "backend",
      "product-design",
    ],
  },
  {
    company: "Roopairs",
    title: "Design Engineer",
    founder: false,
    contract: true,
    dateRange: "November 2023 - Present",
    description: [
      "Working with the Roopairs team to create a design system that is a foundation for their scaling strategy.",
    ],
    brandColor: "#1F3730",
    logo: <RoopairsLogoIcon />,
    skills: [
      "design-systems",
      "react",
      "frontend",
      "typescript",
      "product-design",
      "nextjs",
      "framer-motion",
    ],
  },
  {
    company: "ChartGPT",
    title: "Open source contributor",
    founder: false,
    contract: false,
    dateRange: "Indefinite",
    description: ["Placeholder for ChartGPT"],
    brandColor: "#2F80ED",
    logo: <ChartGptLogoIcon />,
    skills: [
      "open-source",
      "design-systems",
      "react",
      "frontend",
      "typescript",
      "product-design",
      "nextjs",
      "framer-motion",
    ],
  },
  {
    company: "Saas-ui",
    title: "Open source contributor",
    founder: false,
    contract: false,
    dateRange: "Indefinite",
    description: ["Placeholder for Saas-ui"],
    brandColor: "#8952e0",
    logo: <RoopairsLogoIcon />,
    skills: [
      "open-source",
      "design-systems",
      "react",
      "frontend",
      "typescript",
      "framer-motion",
    ],
  },
  {
    company: "Whop",
    title: "Design/Product Engineer",
    founder: false,
    contract: false,
    dateRange: "February 2023 - August 2023",
    description: [
      "Created a bespoke design system using Tailwind, Radix ui, and storybook. Created more than 65 components from idea to production package. The design system received incredibly positive reviews and adoption by the entire engineering team. The project expanded from an internal use to open sourcing, which opened a new opportunity for high growth of the product with a developer-app's platform launching on its back.",
      "Led the team to polished design and implementation across the product. Added micro-animations with accessible fallbacks",
      "Led documentation with Storybook and internal tooling and held demos of releases as well as open critiques for clear understanding of the design system.",
      "Mentored the designer and front-end teams on design systems",
      "I built custom Figma dev tooling for handoff in the design system component's API directly",
    ],
    brandColor: "#FF6243",
    logo: <WhopLogoIcon />,
    skills: [
      "design-systems",
      "framer-motion",
      "frontend",
      "nextjs",
      "product-design",
      "react",
      "storybook",
      "typescript",
      "product-management",
      "graphql",
      "open-source",
    ],
  },
  {
    company: "OwnCo",
    title: "Design/Product Engineer",
    founder: false,
    contract: true,
    dateRange: "September 2022 - March 2023",
    description: [
      "Lead the redesign of the product, in both UI and code.",
      "The focus of the new version was on clean UI with intentional UX and tapped into strategy goals (Listening to customers) that was previously missing. Implemented a design-system approach to building, to ensure polished and fast shipping. This included things like graphql codegen + the design system and Formik to auto generate forms.",
      "Implemented a modern stack: Next.js + Vercel, chakra-ui, saas-ui, Clerk, PlanetScale + Pothos + Prisma; and mentored the engineers through the transition",
    ],
    brandColor: "#132CFB",
    logo: <OwnCoLogoIcon />,
    skills: [
      "frontend",
      "backend",
      "framer-motion",
      "product-management",
      "product-design",
      "typescript",
      "operations",
      "graphql",
      "react",
      "nextjs",
    ],
  },
  {
    company: "Plain",
    title: "Senior Software Engineer",
    founder: false,
    contract: true,
    dateRange: "August 2022 - October 2022",
    description: [
      "Worked as a full-stack software engineer with a focus on frontend. As a small team, I also worked on product management, helping the founders organize their thoughts regarding prioritization.",
    ],
    brandColor: "#252a3b",
    logo: <PlainLogoIcon />,
    skills: [
      "react",
      "frontend",
      "typescript",
      "graphql",
      "product-management",
      "product-design",
      "nextjs",
      "customer-support",
    ],
  },
  {
    company: "Heron",
    title: "Design/Product Engineer",
    founder: true,
    contract: false,
    dateRange: "January 2022 - August 2022",
    description: [
      "Designed and Developed an MVP from discovery phase to the delivery phase. Utilized React, Next.js, Typescript, GraphQL.",
      "Focused on clean UI, as the app was heavy on data and tables.",
      "I created a Customer Advisory Board that led to the first customers co-developing the app.",
      "Designed the website (and built), pitch deck, and social media promotional images.",
    ],
    brandColor: "#127B75",
    logo: <HeronLogoIcon />,
    skills: [
      "backend",
      "customer-support",
      "framer-motion",
      "frontend",
      "graphql",
      "marketing",
      "nextjs",
      "operations",
      "product-design",
      "product-management",
      "react",
      "sales",
      "typescript",
      "web-design",
    ],
  },
  {
    company: "Chakra-ui",
    title: "Open source contributor",
    founder: false,
    contract: false,
    dateRange: "Indefinite",
    description: [
      "I so much enjoyed using this design system as a consumer, that I decided to contribute to it. I've contributed to the docs, the website, and the codebase on numerous occasions mostly focused on the component APIs",
    ],
    brandColor: "#319795",
    logo: <ChakraUiLogoIcon />,
    skills: [
      "framer-motion",
      "frontend",
      "nextjs",
      "product-design",
      "react",
      "typescript",
      "web-design",
      "design-systems",
      "open-source",
    ],
  },
  {
    company: "Meeshkan",
    title: "Design/Product Engineer",
    founder: true,
    contract: false,
    dateRange: "March 2020 - January 2022",
    description: [
      "I was the sole designer, led a team of developers and business people and was a co- founder, speaking with clients and driving vision.",
      "Led a team of engineers on the creation of the MVP from concept, to testing and first clients.",
      "Designed and built the website in Gatsby. Implemented GraphCMS (Now HyGraph) for the marketing team. Using some clever GraphQL unions, made this almost a drag and drop website builder for them to experiment with.",
      "Built the documentation and led the product walkthroughs (live and async) for clients.",
      "Implemented XYZ technology across the product.",
    ],
    brandColor: "#DC1853",
    logo: <MeeshkanLogoIcon />,
    skills: [
      "operations",
      "marketing",
      "sales",
      "customer-support",
      "product-management",
      "backend",
      "framer-motion",
      "frontend",
      "graphql",
      "nextjs",
      "product-design",
      "react",
      "typescript",
      "web-design",
    ],
  },
  {
    company: "Hygraph",
    title: "Web Designer & Developer",
    founder: false,
    contract: true,
    dateRange: "November 2018 - January 2020",
    description: [
      "Operated as the team's sole designer, and worked on the marketing site and documentation. I often found that the question I was answering for users was 'How do I use GraphQL?' and 'What is GraphQL?'",
    ],
    brandColor: "#6246EA",
    logo: <HygraphLogoIcon />,
    skills: [
      "graphql",
      "marketing",
      "web-design",
      "product-design",
      "react",
      "nextjs",
      "frontend",
    ],
  },
  {
    company: "TAIA",
    title: "Chief Product Officer",
    founder: false,
    contract: false,
    dateRange: "March 2018 - November 2018",
    description: [
      "At TAIA, as the first full-time employee, I took on many roles. My main focuses are to design & execute the product, coach the sales & marketing teams, & represent the product at events. I taught myself how to code here while developing the landing page and product.",
    ],
    brandColor: "#1caac6",
    logo: <TaiaLogoIcon />,
    skills: [
      "operations",
      "sales",
      "marketing",
      "frontend",
      "product-design",
      "product-management",
      "react",
      "web-design",
    ],
  },
  {
    company: "ClickUp",
    title: "Marketing Content Manager",
    founder: false,
    contract: false,
    dateRange: "December 2017 - April 2018",
    description: [
      "My first entry into tech, I worked as a content manager for ClickUp. I wrote copy for and designed landing pages, wrote blog posts, created videos, and managed the social media accounts. I taught myself how to design here while doing landing pages.",
    ],
    brandColor: "#7b68ee",
    logo: <ClickUpLogoIcon />,
    skills: ["marketing", "web-design", "customer-support", "sales"],
  },
  {
    company: "Bare Peak",
    title: "Founder",
    founder: true,
    contract: false,
    dateRange: "December 2017 - April 2018",
    description: [
      "I dropped out of college to pursue a startup idea with an accelerator. This was a 3D printed women's travel shoe where the upper was made of a knit material. I designed the shoe, as well the website, then sourced the material and created a physical prototype.",
    ],
    brandColor: "#719266",
    logo: <DashedCircleIcon size={18} className='text-white' />,
    skills: ["operations", "sales", "marketing", "customer-support"],
  },
];

export const CareerExperience = ({
  skillsSelected,
  setSkillsSelected,
}: {
  skillsSelected: Skill[] | undefined;
  setSkillsSelected: Dispatch<SetStateAction<Skill[] | undefined>>;
}) => {
  const handleSkillSelect = (skill: Skill) => {
    if (skillsSelected?.includes(skill)) {
      setSkillsSelected(skillsSelected.filter((s) => s !== skill));
    } else {
      setSkillsSelected([...(skillsSelected ?? []), skill]);
    }
  };

  return (
    <section className='mt-24 max-w-screen-sm mx-auto'>
      <div className='flex justify-between item-center gap-4 mb-8 mx-auto flex-wrap'>
        <h2 className='text-lg text-sage-10 w-fit whitespace-nowrap'>
          My Experience
        </h2>

        <Flex align='center' gap='4' wrap='wrap'>
          {(skillsSelected?.length || 0) > 0 && (
            <Button
              size='1'
              variant='ghost'
              color='gray'
              onClick={() => setSkillsSelected(undefined)}
            >
              <XIcon size={12} />
              Clear filters
            </Button>
          )}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger
              style={{ width: 300, justifyContent: "space-between" }}
            >
              <Button variant='outline' color='gray' className='px-2'>
                <div className='flex gap-1 max-w-[calc(100%-16px)] overflow-scroll'>
                  {skillsSelected?.length === 0 || skillsSelected === undefined
                    ? "Filter by skill"
                    : skillsSelected.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                </div>
                <CaretDownIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content variant='soft'>
              <DropdownMenu.Group>
                <DropdownMenu.Label>Technical</DropdownMenu.Label>
                {technicalSkills.map((skill) => {
                  const isChecked = skillsSelected?.includes(skill.value);
                  return (
                    <DropdownMenu.CheckboxItem
                      key={skill.value}
                      checked={isChecked}
                      onClick={(event) => {
                        event.preventDefault();
                        handleSkillSelect(skill.value);
                      }}
                    >
                      {skill.label}
                    </DropdownMenu.CheckboxItem>
                  );
                })}
              </DropdownMenu.Group>
              <DropdownMenu.Separator />

              <DropdownMenu.Group>
                <DropdownMenu.Label>Design</DropdownMenu.Label>
                {designSkills.map((skill) => {
                  const isChecked = skillsSelected?.includes(skill.value);
                  return (
                    <DropdownMenu.CheckboxItem
                      key={skill.value}
                      checked={isChecked}
                      onClick={(event) => {
                        event.preventDefault();
                        handleSkillSelect(skill.value);
                      }}
                    >
                      {skill.label}
                    </DropdownMenu.CheckboxItem>
                  );
                })}
              </DropdownMenu.Group>
              <DropdownMenu.Separator />

              <DropdownMenu.Group>
                <DropdownMenu.Label>Business</DropdownMenu.Label>
                {businessSkills.map((skill) => {
                  const isChecked = skillsSelected?.includes(skill.value);
                  return (
                    <DropdownMenu.CheckboxItem
                      key={skill.value}
                      checked={isChecked}
                      onClick={(event) => {
                        event.preventDefault();
                        handleSkillSelect(skill.value);
                      }}
                    >
                      {skill.label}
                    </DropdownMenu.CheckboxItem>
                  );
                })}
              </DropdownMenu.Group>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Flex>
      </div>
      <div className='flex flex-col gap-4'>
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.company}
            {...experience}
            skillsSelected={skillsSelected}
          />
        ))}
      </div>
    </section>
  );
};
