import {
  Badge,
  Button,
  Card,
  DropdownMenu,
  Flex,
  Grid,
} from "@radix-ui/themes";
import React, { Dispatch, SetStateAction } from "react";
import {
  CaretDownIcon,
  ChakraUiLogoIcon,
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
  { value: "data-modeling", label: "Data Modeling" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "linear", label: "Linear" },
] as const;
export const designSkills = [
  { value: "product-design", label: "Product Design" },
  { value: "design-systems", label: "Design Systems" },
  { value: "storybook", label: "Storybook" },
  { value: "figma", label: "Figma" },
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
  description: string;
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
  skillsSelected
}) => {
  const noSkillsSelected = skillsSelected?.length === 0 || skillsSelected === undefined
  const hasSkillsSelected = skillsSelected?.some(skill => skills.includes(skill))

  return (
    <Card className={!hasSkillsSelected && !noSkillsSelected ? "opacity-40" : undefined}>
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
          <p className='text-sm text-sage-9'>{dateRange}</p>
        </div>
      </div>
      <div className="ml-[42px]">
        <p className='mt-2 text-sage-10 line-clamp-3'>{description}</p>
        {hasSkillsSelected && <div className='mt-3 flex flex-wrap gap-2'>
          {skills.filter(skill => skillsSelected?.includes(skill)).map((skill) => (
            <Badge key={skill} size="1" color="gray">
              {skill}
            </Badge>
          )
          )}
        </div>}
      </div>
    </Card>
  );
};

const experiences: ExperienceCardProps[] = [
  {
    company: "Halite.app",
    title: "Engineering & Design",
    founder: true,
    contract: false,
    dateRange: "September 2023 - Present",
    description:
      "With a couple of friends in the space, building a niche tool around equity budgeting, and workforce planning.",
    brandColor: "#44403C",
    logo: <HaliteLogoIcon />,
    skills: [
      "typescript",
      "react",
      "nextjs",
      "graphql",
      "frontend",
      "framer-motion",
      "data-modeling",
      "figma",
      "framer-motion",
      "product-management",
      "web-design",
      "operations",
      "sales",
      "backend",
      "linear",
      "product-design",
    ],
  },
  {
    company: "Roopairs",
    title: "Design System Consultant",
    founder: false,
    contract: true,
    dateRange: "November 2023 - Present",
    description:
      "Working with the Roopairs team to create a design system that is a foundation for their scaling strategy.",
    brandColor: "#1F3730",
    logo: <RoopairsLogoIcon />,
    skills: ["design-systems", "react", "frontend", "typescript", "product-design", "figma", "linear", "nextjs", "framer-motion"],
  },
  {
    company: "Whop",
    title: "Design Engineer -> Product",
    founder: false,
    contract: false,
    dateRange: "February 2023 - August 2023",
    description:
      "Created a bespoke design system using Tailwind, Radix ui, and storybook. Promoted to the Product Engineer role while continuing to maintain and build the design system. This design system is now the foundation for a large growth strategy of Whop.",
    brandColor: "#FF6243",
    logo: <WhopLogoIcon />,
    skills: ["data-modeling", "design-systems", "figma", "framer-motion", "frontend", "linear", "nextjs", "product-design", "react", "storybook", "typescript", "product-management", "graphql"],
  },
  {
    company: "OwnCo",
    title: "Product & Engineering",
    founder: false,
    contract: true,
    dateRange: "September 2022 - March 2023",
    description:
      "Stepped in to manage a team of engineers to rebuild the app in a flexible stack with an aesthetic UI, and user-led UX. Now advising.",
    brandColor: "#132CFB",
    logo: <OwnCoLogoIcon />,
    skills: ["frontend", "backend", "data-modeling", "figma", "framer-motion", "product-management", "product-design", "typescript", "operations", "graphql", "linear", "react", "nextjs"],
  },
  {
    company: "Plain",
    title: "Senior Software Engineer",
    founder: false,
    contract: true,
    dateRange: "August 2022 - October 2022",
    description:
      "Worked as a full-stack software engineer with a focus on frontend. As a small team, I also worked on product management, helping the founders organize their thoughts regarding prioritization.",
    brandColor: "#252a3b",
    logo: <PlainLogoIcon />,
    skills: ["react", "frontend", "typescript", "graphql", "product-management", "product-design", "linear", "nextjs", "customer-support"],
  },
  {
    company: "Heron",
    title: "Product & Engineering",
    founder: true,
    contract: false,
    dateRange: "January 2022 - August 2022",
    description:
      "Designed and Developed an MVP from discovery phase to the delivery phase. I created a Customer Advisory Board that lead to the first customers co-developing the app. Managed customers, a data science engineer and another product designer to do so.",
    brandColor: "#127B75",
    logo: <HeronLogoIcon />,
    skills: ["backend", "data-modeling", "customer-support", "figma", "framer-motion", "frontend", "graphql", "linear", "marketing", "nextjs", "operations", "product-design", "product-management", "react", "sales", "typescript", "web-design"],
  },
  {
    company: "Chakra-ui",
    title: "Open source contributor",
    founder: false,
    contract: false,
    dateRange: "Indefinite",
    description:
      "I so much enjoyed using this design system as a consumer, that I decided to contribute to it. I've contributed to the docs, the website, and the codebase on numerous occasions mostly focused on the component APIs",
    brandColor: "#319795",
    logo: <ChakraUiLogoIcon />,
    skills: ["figma", "framer-motion", "frontend", "nextjs", "product-design", "react", "typescript", "web-design", "design-systems"],
  },
  {
    company: "Meeshkan",
    title: "Product & Engineering",
    founder: true,
    contract: false,
    dateRange: "March 2020 - January 2022",
    description:
      "Joined as a web developer, and ended up as a co-founder driving product direction. Here I was the sole designer, lead a team of developers and business people and a was a co-founder speaking with clients and driving vision.",
    brandColor: "#DC1853",
    logo: <MeeshkanLogoIcon />,
    skills: ["operations", "marketing", "sales", "customer-support", "product-management", "backend", "data-modeling", "figma", "framer-motion", "frontend", "graphql", "linear", "nextjs", "product-design", "react", "typescript", "web-design"],
  },
  {
    company: "Hygraph",
    title: "Web Designer & Developer",
    founder: false,
    contract: true,
    dateRange: "November 2018 - January 2020",
    description:
      "Operated as the team's sole designer, and worked on the marketing site and documentation. I often found that the question I was answering for users was 'How do I use GraphQL?' and 'What is GraphQL?'",
    brandColor: "#6246EA",
    logo: <HygraphLogoIcon />,
    skills: ["graphql", "marketing", "web-design", "product-design", "figma", "react", "nextjs", "frontend"],
  },
  {
    company: "TAIA",
    title: "Chief Product Officer",
    founder: false,
    contract: false,
    dateRange: "March 2018 - November 2018",
    description:
      "At TAIA, as the first full-time employee, I took on many roles. My main focuses are to design & execute the product, coach the sales & marketing teams, & represent the product at events. I taught myself how to code here while developing the landing page and product.",
    brandColor: "#1caac6",
    logo: <TaiaLogoIcon />,
    skills: ["operations", "sales", "marketing", "frontend", "product-design", "product-management", "react", "web-design"],
  },
  {
    company: "ClickUp",
    title: "Marketing Content Manager",
    founder: false,
    contract: false,
    dateRange: "December 2017 - April 2018",
    description:
      "My first entry into tech, I worked as a content manager for ClickUp. I wrote copy for and designed landing pages, wrote blog posts, created videos, and managed the social media accounts. I taught myself how to design here while doing landing pages.",
    brandColor: "#7b68ee",
    logo: <ClickUpLogoIcon />,
    skills: ["marketing", "figma", "web-design", "customer-support", "sales"],
  },
  {
    company: "Bare Peak",
    title: "Founder",
    founder: true,
    contract: false,
    dateRange: "December 2017 - April 2018",
    description:
      "I dropped out of college to pursue a startup idea with an accelerator. This was a 3D printed women's travel shoe where the upper was made of a knit material. I designed the shoe, as well the website, then sourced the material and created a physical prototype.",
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
    <section className='mt-24 max-w-screen-lg mx-auto'>
      <div className='flex justify-between item-center gap-4 mb-8 mx-auto flex-wrap'>
        <h2 className='text-lg text-sage-10 w-fit whitespace-nowrap'>My Experience</h2>

        <Flex align='center' gap='4' wrap="wrap">
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
              <Button variant='outline' color='gray' className="px-2">
                <span className="whitespace-nowrap max-w-72 overflow-clip">
                  {skillsSelected?.length === 0 ||
                    skillsSelected === undefined ? (
                    "Filter by skill"
                  ) : skillsSelected.length === 1 ? (
                    <Badge>{skillsSelected.toString()}</Badge>
                  ) : (
                    <span>
                      <Badge>{skillsSelected[0].toString()}</Badge>, {skillsSelected.length} more
                    </span>
                  )}
                </span>
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
      <Grid gap='2' columns={{ sm: "1", md: "2" }}>
        {experiences.map((experience) => (
          <ExperienceCard key={experience.company} {...experience} skillsSelected={skillsSelected} />
        ))}
      </Grid>
    </section>
  );
};
