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
