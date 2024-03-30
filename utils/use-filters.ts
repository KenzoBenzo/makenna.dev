import { parseAsArrayOf, parseAsStringLiteral, useQueryState } from "nuqs";
import { useCallback } from "react";
import {
	Skill,
	businessSkills,
	designSkills,
	technicalSkills,
} from "./skill-filters";

export const useFilters = () => {
	const [skillsSelected, setSkillsSelected] = useQueryState(
		"skillsSelected",
		parseAsArrayOf(
			parseAsStringLiteral([
				...businessSkills.map((skill) => skill.value),
				...technicalSkills.map((skill) => skill.value),
				...designSkills.map((skill) => skill.value),
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
