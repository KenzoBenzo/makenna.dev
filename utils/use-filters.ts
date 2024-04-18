import { parseAsArrayOf, parseAsStringLiteral, useQueryState } from "nuqs";
import { useCallback } from "react";
import {
	BusinessSkills,
	DesignSkills,
	TechnicalSkills,
} from "./graphql-generated";

export const technicalSkills = [
	{ value: TechnicalSkills.Typescript, label: "TypeScript" },
	{ value: TechnicalSkills.React, label: "React" },
	{ value: TechnicalSkills.Nextjs, label: "Next.js" },
	{ value: TechnicalSkills.Graphql, label: "GraphQL" },
	{ value: TechnicalSkills.FramerMotion, label: "Framer Motion" },
	{ value: TechnicalSkills.Frontend, label: "Frontend" },
	{ value: TechnicalSkills.Backend, label: "Backend" },
	{ value: TechnicalSkills.OpenSource, label: "Open Source" },
] as const;

export const designSkills = [
	{ value: DesignSkills.ProductDesign, label: "Product Design" },
	{ value: DesignSkills.DesignSystems, label: "Design Systems" },
	{ value: DesignSkills.Storybook, label: "Storybook" },
	{ value: DesignSkills.WebDesign, label: "Web Design" },
] as const;

export const businessSkills = [
	{ value: BusinessSkills.ProductManagement, label: "Product management" },
	{ value: BusinessSkills.Sales, label: "Sales" },
	{ value: BusinessSkills.Marketing, label: "Marketing" },
	{ value: BusinessSkills.CustomerSupport, label: "Customer support" },
	{ value: BusinessSkills.Operations, label: "Operations" },
] as const;

export type Skill = TechnicalSkills | DesignSkills | BusinessSkills;

export const useFilters = () => {
	const [skillsSelected, setSkillsSelected] = useQueryState(
		"skillsSelected",
		parseAsArrayOf(
			parseAsStringLiteral([
				...(Object.values(TechnicalSkills) as TechnicalSkills[]),
				...(Object.values(DesignSkills) as DesignSkills[]),
				...(Object.values(BusinessSkills) as BusinessSkills[]),
			])
		)
	);

	const handleSkillSelect = useCallback(
		(skill: Skill) => {
			if (skillsSelected?.includes(skill)) {
				setSkillsSelected(skillsSelected?.filter((s) => s !== skill));
			} else {
				setSkillsSelected([...(skillsSelected ?? []), skill]);
			}
		},
		[setSkillsSelected, skillsSelected]
	);

	return { skillsSelected, setSkillsSelected, handleSkillSelect };
};
